import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
				heading: ["Plus Jakarta Sans", "sans-serif"],
				mono: ["IBM Plex Mono", "Consolas", "monospace"],
			},
			fontSize: {
				'xs': '0.75rem',     // 12px
				'sm': '0.875rem',    // 14px
				'base': '1rem',      // 16px
				'lg': '1.125rem',    // 18px
				'xl': '1.25rem',     // 20px
				'2xl': '1.5rem',     // 24px
				'3xl': '1.875rem',   // 30px
				'4xl': '2.25rem',    // 36px
				'5xl': '3rem',       // 48px
				'6xl': '3.75rem',    // 60px
			},
			spacing: {
				"4": "1rem",      // 16px
				"6": "1.5rem",    // 24px
				"8": "2rem",      // 32px
				"12": "3rem",     // 48px
				"16": "4rem",     // 64px
				"18": "4.5rem",   // 72px (header height)
				"20": "5rem",     // 80px (section padding)
				"28": "7rem",     // 112px (large section padding)
				'88': '22rem',
				'128': '32rem',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
			// Minimalist Brand Colors
				brand: {
					900: "hsl(var(--brand-900))",  // Pure black
					700: "hsl(var(--brand-700))",  // Dark gray
					500: "hsl(var(--brand-500))",  // Black
				},
				gray: {
					400: "hsl(var(--gray-400))",   // Mid gray
				},
				
				// Semantic Mappings
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: '0',
				md: '0',
				sm: '0',
				xl: "0",
				"2xl": "0",
			},
			boxShadow: {
				'executive': 'var(--shadow-executive)',
				'glow': 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				'executive': 'cubic-bezier(.2,.8,.2,1)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
