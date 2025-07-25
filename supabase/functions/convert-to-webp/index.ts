import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { imageUrl, bucketName = 'blog-images' } = await req.json()

    if (!imageUrl) {
      return new Response(
        JSON.stringify({ error: 'Image URL is required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    console.log('Converting image to WebP:', imageUrl)

    // Fetch the original image
    const imageResponse = await fetch(imageUrl)
    if (!imageResponse.ok) {
      throw new Error(`Failed to fetch image: ${imageResponse.statusText}`)
    }

    const imageBuffer = await imageResponse.arrayBuffer()
    const imageData = new Uint8Array(imageBuffer)

    // Use Canvas API to convert to WebP (fallback approach for Deno)
    // This is a simplified conversion - in production you might want to use a more robust image processing library
    const canvas = new OffscreenCanvas(800, 600) // Default size, should be dynamic
    const ctx = canvas.getContext('2d')
    
    if (!ctx) {
      throw new Error('Could not get canvas context')
    }

    // Create image from buffer
    const blob = new Blob([imageData])
    const imageBitmap = await createImageBitmap(blob)
    
    // Resize canvas to match image
    canvas.width = imageBitmap.width
    canvas.height = imageBitmap.height
    
    // Draw image on canvas
    ctx.drawImage(imageBitmap, 0, 0)
    
    // Convert to WebP
    const webpBlob = await canvas.convertToBlob({ 
      type: 'image/webp', 
      quality: 0.8 
    })
    
    const webpBuffer = await webpBlob.arrayBuffer()

    // Generate WebP filename
    const originalPath = new URL(imageUrl).pathname
    const pathParts = originalPath.split('/')
    const fileName = pathParts[pathParts.length - 1]
    const fileNameWithoutExt = fileName.split('.')[0]
    const webpFileName = `${fileNameWithoutExt}.webp`
    const webpPath = `webp/${webpFileName}`

    // Upload WebP version to storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(webpPath, new Uint8Array(webpBuffer), {
        contentType: 'image/webp',
        upsert: true
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw uploadError
    }

    // Get public URL for WebP image
    const { data: { publicUrl } } = supabase.storage
      .from(bucketName)
      .getPublicUrl(webpPath)

    console.log('WebP conversion successful:', publicUrl)

    return new Response(
      JSON.stringify({ 
        webpUrl: publicUrl,
        originalUrl: imageUrl,
        size: webpBuffer.byteLength
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error converting image to WebP:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})