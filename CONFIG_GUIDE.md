# Quotely Configuration Guide

## Overview
All site content and theme settings are now centralized in the `/src/config` directory. This allows you to update the entire site's appearance and content without touching component files.

## Quick Start

### 1. Changing Colors
Edit `src/config/theme.ts`:
```typescript
colors: {
  primary: "#2B4C8C",      // Change this to update primary brand color
  secondary: "#FF6B35",    // Change this to update secondary color
  accent: "#FFD700",       // Change this to update accent color
}
```

### 2. Updating Content
Edit `src/config/content.ts`:
```typescript
hero: {
  title: "Your new title here",
  subtitle: "Your new subtitle",
  cta: "Your call-to-action text"
}
```

### 3. Adding New Features
Add to the features array in `src/config/content.ts`:
```typescript
features: [
  // ... existing features
  {
    icon: "🚀",
    title: "New Feature",
    description: "Description of your new feature"
  }
]
```

## File Structure

```
src/config/
├── content.ts      # All text content and data
├── theme.ts        # Colors, fonts, spacing, etc.
└── index.ts        # Central export file
```

## Using in Components

### Basic Usage
```typescript
import { siteContent, theme } from '../config';

// Use content
<h1>{siteContent.hero.title}</h1>

// Use theme colors
<div style={{ color: theme.colors.primary }}>
```

### With Styled Components
```typescript
import styled from 'styled-components';
import { theme } from '../config';

const Button = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.textLight};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
`;
```

### With Tailwind (if using)
First, update your `tailwind.config.js`:
```javascript
import { theme } from './src/config/theme';

module.exports = {
  theme: {
    extend: {
      colors: theme.colors,
      spacing: theme.spacing,
      fontSize: theme.fontSize
    }
  }
}
```

## Content Sections

### Hero Section
- `title`: Main headline
- `subtitle`: Supporting text
- `cta`: Call-to-action button text

### Features
Array of feature objects with:
- `icon`: Emoji or icon
- `title`: Feature name
- `description`: Feature explanation

### Comparison Table
- `title`: Table heading
- `competitors`: Array of competitor names
- `features`: Array of feature comparisons

### Stats
- `aiOperation`: AI availability (24/7)
- `costPerHour`: Operating cost ($1.37)
- `responseRate`: Success rate (94.4%)
- `quoteTime`: Speed metric
- `uptime`: Reliability metric

### Contact
- `email`: Sales contact email
- `phone`: Contact phone number

## Theme Customization

### Colors
- **Primary colors**: Main brand colors
- **Background colors**: Page backgrounds
- **Text colors**: Various text states
- **Status colors**: Success, warning, error states

### Typography
- **fonts.primary**: Main body font
- **fonts.heading**: Heading font
- **fonts.mono**: Code/monospace font
- **fontSize**: Size scale from xs to 6xl

### Spacing
Consistent spacing scale:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px

### Other Theme Properties
- **borderRadius**: Rounded corner values
- **shadows**: Box shadow presets
- **transitions**: Animation speeds
- **breakpoints**: Responsive design breakpoints

## Best Practices

1. **Never hardcode values** - Always use config
2. **Keep content separate** - Text in content.ts, styles in theme.ts
3. **Use semantic naming** - Colors like "primary" not "blue"
4. **Test changes** - Preview locally before deploying
5. **Version control** - Commit config changes separately

## Deployment

After making changes:

1. Test locally:
```bash
npm run dev
```

2. Build and check:
```bash
npm run build
```

3. Deploy:
```bash
git add .
git commit -m "Update site configuration"
git push
vercel --prod
```

## Examples

### Change to Dark Theme
```typescript
// In theme.ts
colors: {
  primary: "#1a1a1a",
  background: "#000000",
  textPrimary: "#ffffff",
  // ... update other colors
}
```

### Add Testimonials Section
```typescript
// In content.ts
testimonials: [
  {
    name: "John Doe",
    company: "ABC Insurance",
    quote: "Quotely transformed our business"
  }
]
```

### Update for Holidays
```typescript
// Temporary holiday theme
colors: {
  primary: "#c41e3a",  // Christmas red
  secondary: "#165b33", // Christmas green
  accent: "#ffd700",    // Gold
}
```

## Troubleshooting

- **Changes not showing**: Clear browser cache or restart dev server
- **Build errors**: Check for typos in import statements
- **Style conflicts**: Ensure no hardcoded styles override config
- **Missing content**: Verify all required fields are present

## Support

For questions about configuration:
- Check this guide first
- Review existing config files for examples
- Contact: sales@tryquotely.com