---
name: Canine Clarity
colors:
  surface: '#f4fafd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fafd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9ec'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1f'
  on-surface-variant: '#414751'
  inverse-surface: '#2b3234'
  inverse-on-surface: '#ebf2f4'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#785a00'
  on-secondary: '#ffffff'
  secondary-container: '#ffd167'
  on-secondary-container: '#765900'
  tertiary: '#5a5c5d'
  on-tertiary: '#ffffff'
  tertiary-container: '#737576'
  on-tertiary-container: '#fcfdfe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#ffdf9b'
  secondary-fixed-dim: '#edc157'
  on-secondary-fixed: '#251a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f4fafd'
  on-background: '#161d1f'
  surface-variant: '#dde4e6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is built to evoke a sense of professional care mixed with approachable warmth. The target audience consists of pet owners seeking reliable, stress-free grooming services. 

The aesthetic follows a **Modern / Playful** direction with subtle **Minimalist** influences. It prioritizes high legibility and "soft" touchpoints to reduce the anxiety often associated with pet medical or grooming appointments. Visuals should feel "bubbly" but grounded—avoiding the clutter of traditional pet retail in favor of a clean, premium service experience. White space is used generously to emphasize hygiene and clarity.

## Colors

The palette balances the reliability of soft blues with the optimistic energy of warm yellows.

- **Primary (Sky Blue):** Used for primary actions, links, and key brand moments. It represents trust and cleanliness.
- **Secondary (Sunlight Yellow):** Reserved for promotions, highlights, and primary "Call to Action" buttons to ensure high visibility and a cheerful mood.
- **Neutral (Slate/Cloud):** The dark slate is used for high-contrast typography, while the cloud-white serves as the primary background to maintain a "clean clinic" feel.
- **Success/Warning:** Use softened versions of green and orange only for functional feedback.

## Typography

This design system utilizes a dual-font approach to balance personality with utility. 

**Plus Jakarta Sans** provides a friendly, rounded geometric feel for headlines, making the brand feel inviting and modern. **Work Sans** is used for all functional body copy and labels, offering a sturdy, professional, and highly legible experience even at smaller sizes. 

On mobile devices, display headings scale down aggressively to prevent awkward line breaks, while body sizes remain constant to ensure accessibility for all users.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model for desktop and a **Fluid** model for mobile.

- **Desktop:** A 12-column grid with a 1200px max-width container. Central alignment is preferred for landing page sections to maintain a focused narrative.
- **Rhythm:** An 8px base unit drives all padding and margins. Use larger "breathable" gaps (120px) between major content sections to reinforce the clean aesthetic.
- **Mobile:** Transition to a 4-column fluid grid with 16px side margins.

## Elevation & Depth

To maintain a friendly and accessible look, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Ambient Shadows**.

- **Surface Tiers:** Use the tertiary light grey (`#F8F9FA`) to define "containers" against the pure white background.
- **Shadows:** When elevation is required (e.g., for cards or floating buttons), use an extremely diffused, low-opacity blue-tinted shadow (`rgba(74, 144, 226, 0.08)`). This keeps the depth feeling airy rather than heavy.
- **Interactive States:** Lift elements slightly on hover using a subtle Y-axis shift (2px-4px) rather than increasing shadow darkness.

## Shapes

The shape language is defined by **Rounded** corners to mirror the friendly, soft nature of the brand.

Standard UI components like inputs and buttons use a 0.5rem (8px) radius. Larger components like content cards or promotional banners should use `rounded-xl` (1.5rem / 24px) to create a distinct, approachable "frame" for imagery and text. Avoid sharp 90-degree angles entirely.

## Components

- **Buttons:** Primary buttons use the sunlight yellow with dark text for maximum "pop." Secondary buttons use the sky blue with white text. Buttons should have generous horizontal padding (32px) and use `headline-sm` font weights.
- **Cards:** Promotional cards should use a 1px soft blue border or the tertiary background color. They should feature `rounded-xl` corners and include a "floating" image of a pet that breaks the container's top boundary for a playful effect.
- **Input Fields:** Use a thick 2px border in light grey, turning sky blue on focus. Labels should be placed above the field using the `label-caps` style.
- **Chips/Badges:** Small, pill-shaped indicators for service categories (e.g., "Full Groom," "Nail Trim"). Use light blue backgrounds with darker blue text.
- **Booking Widget:** A specialized sticky component or modal that remains accessible, using a contrasting background color to stand out from the main flow.