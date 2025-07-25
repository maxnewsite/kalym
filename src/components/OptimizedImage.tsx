import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  priority = false 
}: OptimizedImageProps) => {
  const [webpSrc, setWebpSrc] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Only convert images from Supabase storage
    if (src.includes('supabase.co') && src.includes('blog-images')) {
      // Generate WebP URL by replacing extension
      const webpUrl = src.replace(/\.(jpg|jpeg|png)$/i, '.webp').replace('/blog-images/', '/blog-images/webp/');
      
      // Test if WebP version exists
      const img = new Image();
      img.onload = () => setWebpSrc(webpUrl);
      img.onerror = () => setWebpSrc(null);
      img.src = webpUrl;
    }
  }, [src]);

  const handleImageError = () => {
    setImageError(true);
    setWebpSrc(null);
  };

  // Use WebP if available, otherwise fall back to original
  const imageSrc = webpSrc || src;

  return (
    <picture className={className}>
      {webpSrc && (
        <source srcSet={webpSrc} type="image/webp" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        onError={handleImageError}
        className="w-full h-full object-cover"
        style={imageError ? { filter: 'brightness(0.9)' } : undefined}
      />
    </picture>
  );
};