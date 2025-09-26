# Interactive Compute Governance Map - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from data visualization platforms like Observable, Mapbox showcases, and academic research interfaces. The design prioritizes clarity, professionalism, and information density while maintaining visual appeal for this specialized geopolitical mapping tool.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Deep Navy: 220 25% 15% (primary background)
- Slate Blue: 215 20% 25% (secondary backgrounds)
- Light Gray: 210 10% 85% (text and borders)

**Accent Colors:**
- Amber: 45 90% 60% (Compute Rich markers)
- Cyan: 190 80% 50% (Compute South markers)
- Orange Red: 15 85% 55% (Compute Desert markers)

**Regional Overlays:**
- Compute South: 45 70% 50% (semi-transparent yellow)
- Compute Desert: 25 60% 45% (semi-transparent orange)

### B. Typography
- **Primary Font**: Inter (Google Fonts) - clean, readable for data visualization
- **Heading Sizes**: 1.5rem (tooltip titles), 1.125rem (section headers)
- **Body Text**: 0.875rem (tooltip content), 0.75rem (legend text)
- **Font Weights**: 600 (headings), 400 (body), 500 (emphasis)

### C. Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, and 8 (0.5rem, 1rem, 1.5rem, 2rem)
- Consistent padding: p-4 for tooltips, p-2 for compact elements
- Margins: m-4 between major sections, m-2 for related elements
- Grid gaps: gap-4 for component spacing

### D. Component Library

**Map Container:**
- Full viewport height (100vh)
- Dark theme map tiles for professional appearance
- Smooth zoom/pan interactions

**Professional Tooltip Design:**
- Background: 220 25% 18% with subtle shadow
- Border radius: 8px
- Padding: 1.5rem
- Max width: 320px
- Typography hierarchy with clear section breaks

**Governance Progress Slider:**
- Horizontal progress bar with rounded ends
- Gray background track: 210 10% 30%
- Colored fill based on country type (using accent colors)
- Height: 8px with smooth visual transitions

**Interactive Markers:**
- Circle markers with 2px border
- Different colors for Compute Rich, South, and Desert
- Hover states with subtle scale animation
- Clear visual hierarchy

**Legend & Controls:**
- Positioned top-right (legend) and top-left (controls)
- Semi-transparent background panels
- Clean iconography and clear labels
- Toggle switches for layer visibility

**Navigation Header:**
- Title: "The Unseen Empire: Mapping the Global Compute Landscape"
- Subtitle explaining the compute divide
- Positioned above map with proper spacing
- Typography emphasizing the analytical nature

### E. Animations
**Minimal Animation Strategy:**
- Smooth tooltip fade-in/out (200ms)
- Gentle marker hover scaling (1.1x)
- Progress bar fill animation on tooltip display
- No distracting or unnecessary motion

## Key Design Principles
1. **Information Clarity**: Prioritize readable governance data presentation
2. **Professional Aesthetics**: Clean, academic research interface feel
3. **Spatial Context**: Leverage geographic positioning for narrative impact
4. **Accessibility**: High contrast ratios and clear visual hierarchy
5. **Performance**: Lightweight interactions for smooth map navigation

## Tooltip Content Structure
1. **Country Name** (bold heading)
2. **Governance Progress** (visual slider with percentage)
3. **Key Governance Gaps** (bulleted list with proper spacing)
4. **Literature Link** (styled as primary action button)

This design creates a sophisticated, data-rich experience that balances academic rigor with engaging visual storytelling for global AI governance insights.