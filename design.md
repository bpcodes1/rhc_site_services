---
name: Refined Industrialism
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#44474c'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#515f74'
  primary: '#1d2b3e'
  on-primary: '#ffffff'
  primary-container: '#334155'
  on-primary-container: '#9eadc5'
  inverse-primary: '#b9c7e0'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#292a2a'
  on-tertiary: '#ffffff'
  tertiary-container: '#3f4040'
  on-tertiary-container: '#acacab'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3fd'
  primary-fixed-dim: '#b9c7e0'
  on-primary-fixed: '#0d1c2f'
  on-primary-fixed-variant: '#3a485c'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#e3e2e1'
  tertiary-fixed-dim: '#c7c6c5'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464746'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies "Refined Restraint"—a sophisticated intersection of industrial reliability and event-grade premium service. The visual language moves away from the grit typically associated with site services, leaning instead into a high-end architectural aesthetic.

The style is a hybrid of **Minimalism** and **Modern Corporate**. It prioritizes clarity, precision, and heavy whitespace to signal organization and quality. By using thin, precise lines and a strictly disciplined grid, the UI evokes the feeling of a well-executed logistics plan: invisible, efficient, and impeccably presented.

The target audience ranges from construction project managers to high-end event planners. The UI must feel equally at home on a rugged job site tablet and a polished desktop in a luxury planning studio.

## Colors

The palette is anchored by **Slate Grey**, providing a foundation of professional stability. **Burnt Orange** is used sparingly as a high-visibility accent, nodding to industrial safety but executed with a "burnt" saturation that feels more premium than standard utility orange.

- **Primary (Slate Grey):** Used for structural elements, primary buttons, and navigation.
- **Secondary (Burnt Orange):** Used for critical calls to action, active states, and highlights.
- **Surface (Soft Cream):** The primary background color. It is warmer and more sophisticated than pure white, reducing eye strain and adding an "editorial" feel.
- **Text (Charcoal):** Used for maximum legibility. Avoid pure black to maintain the refined tonal range.

## Typography

The typography strategy relies on the contrast between the condensed, authoritative nature of **Archivo Narrow** and the open, neutral clarity of **Public Sans**.

- **Headlines:** Set in Archivo Narrow. Use uppercase for sub-headlines (headline-md) to reinforce the industrial/signage heritage of the brand.
- **Body Text:** Public Sans provides an institutional, trustworthy feel. Its generous x-height ensures readability even in challenging field conditions.
- **Editorial Balance:** Maintain large margins around text blocks. Headlines should never feel "crowded" by the body copy.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain a controlled, architectural composition. A 12-column grid is used with generous 64px outer margins to create the "premium" sense of whitespace.

- **Grid:** Use a 12-column grid for desktop and tablet, collapsing to a single column on mobile.
- **Rhythm:** All vertical spacing must be a multiple of 8px.
- **Sectioning:** Use large vertical padding (80px - 120px) between major content sections to allow high-quality product photography to "breathe."
- **Alignment:** Strictly align text to the grid. Use staggered layouts for image galleries to avoid a purely "utilitarian" look.

## Elevation & Depth

This design system avoids heavy shadows, favoring **Low-Contrast Outlines** and **Tonal Layers** to create a flat, technical depth.

- **Borders:** Use thin (1px) borders in Slate Grey at 20% opacity to define containers and cards.
- **Surface Layering:** Use subtle shifts in background color (Soft Cream to a slightly cooler light grey) to distinguish between the main canvas and secondary panels.
- **Interactive Depth:** On hover, elements should not "lift" with shadows. Instead, use a subtle background color shift or a slight increase in border weight to signal interactivity. This maintains the "restrained" aesthetic.

## Shapes

The shape language is disciplined and geometric. A **Soft (0.25rem)** roundedness is applied to standard components like buttons and input fields to prevent the UI from feeling overly aggressive or sharp, while maintaining a professional, engineered look.

- **Primary Components:** 4px (0.25rem) corner radius.
- **Feature Cards:** 8px (0.5rem) corner radius for a slightly softer appearance in marketing sections.
- **Photography:** All imagery should retain sharp 0px corners to emphasize the "precision" of the service.

## Components

### Buttons
Primary buttons use the Slate Grey background with Soft Cream text. Secondary/Action buttons use the Burnt Orange accent. All buttons feature high horizontal padding (24px or more) and uppercase labels for a "command" presence.

### Input Fields
Fields are defined by a bottom-border only or a very light 1px wrap. They utilize Public Sans for input text. Focus states should transition the border color to Burnt Orange with no outer glow.

### Cards
Cards are minimalist. They should have no shadow and a thin 1px border. Use generous internal padding (32px+) to elevate the content. Images within cards should always be top-aligned and full-bleed to the top and sides.

### Lists & Data
For service specifications or equipment lists, use a "Table-Lite" approach: thin horizontal dividers, ample row height, and bolded labels on the left.

### Imagery
Product shots must be high-resolution, featuring clean equipment in professional environments. Use a consistent color grade that leans towards cool shadows to match the Slate Grey theme.
