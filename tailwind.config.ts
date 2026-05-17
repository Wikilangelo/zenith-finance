import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          strong: "hsl(var(--surface-strong))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        sage: {
          50: "#f2f7f0",
          100: "#e1ecde",
          500: "#5f7f63",
          700: "#3f5944",
        },
        gold: {
          100: "#f8edc9",
          500: "#d5a83f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 8px)",
        sm: "calc(var(--radius) - 12px)",
        card: "24px",
        button: "16px",
        input: "14px",
      },
      boxShadow: {
        soft: "0 18px 50px -28px hsl(var(--primary) / 0.36)",
        card: "0 16px 44px -32px hsl(var(--primary) / 0.32)",
        lift: "0 20px 60px -36px hsl(var(--shadow-color) / 0.42)",
        inset: "inset 0 1px 0 hsl(0 0% 100% / 0.72)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "Inter", ...fontFamily.sans],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.08em" }],
        body: ["0.9375rem", { lineHeight: "1.5rem" }],
        "title-sm": ["1.125rem", { lineHeight: "1.5rem" }],
        "title-md": ["1.375rem", { lineHeight: "1.85rem" }],
        "title-lg": ["1.875rem", { lineHeight: "2.25rem" }],
        "display-sm": ["2.5rem", { lineHeight: "2.75rem" }],
      },
      spacing: {
        touch: "2.75rem",
        shell: "1.25rem",
        section: "2rem",
        "section-lg": "3rem",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        calm: "400ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.62" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        "soft-pulse": "soft-pulse 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
