export const theme = {
  colors: {
    // Primary brand colors - CHANGE THESE VALUES TO UPDATE BRANDING
    primary: "#7c3aed",      // Purple (Updated Quotely brand)
    primaryHover: "#6d28d9", // Darker purple for hover states
    secondary: "#FF6B35",    // Orange (Quotely brand)
    secondaryHover: "#e55a27", // Darker orange for hover
    accent: "#FFD700",       // Yellow/Gold (Quotely brand)
    accentHover: "#e6c300",  // Darker yellow for hover
    
    // Background colors
    background: "#ffffff",   // White background
    backgroundAlt: "#f8fafc", // Light gray alternative
    backgroundDark: "#1a1a1a", // Dark background
    
    // Text colors  
    textPrimary: "#1f2937",  // Dark gray for main text
    textSecondary: "#6b7280", // Medium gray for secondary text
    textMuted: "#9ca3af",    // Light gray for muted text
    textLight: "#ffffff",    // White text for dark backgrounds
    
    // Border colors
    border: "#e5e7eb",       // Light border
    borderHover: "#d1d5db",  // Darker on hover
    
    // Status colors
    success: "#10b981",      // Green for success
    warning: "#f59e0b",      // Yellow for warnings  
    error: "#ef4444",        // Red for errors
    info: "#3b82f6"          // Blue for info
  },
  
  // Font settings
  fonts: {
    primary: "Inter, system-ui, -apple-system, sans-serif",
    heading: "Inter, system-ui, -apple-system, sans-serif",
    mono: "JetBrains Mono, 'Courier New', monospace"
  },
  
  // Font sizes
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem",    // 48px
    "6xl": "3.75rem"  // 60px
  },
  
  // Spacing - consistent spacing system
  spacing: {
    xs: "0.25rem",   // 4px
    sm: "0.5rem",    // 8px  
    md: "1rem",      // 16px
    lg: "1.5rem",    // 24px
    xl: "2rem",      // 32px
    "2xl": "3rem",   // 48px
    "3xl": "4rem",   // 64px
    "4xl": "6rem"    // 96px
  },
  
  // Border radius
  borderRadius: {
    none: "0",
    sm: "0.125rem",   // 2px
    base: "0.25rem",  // 4px
    md: "0.375rem",   // 6px
    lg: "0.5rem",     // 8px
    xl: "0.75rem",    // 12px
    "2xl": "1rem",    // 16px
    full: "9999px"
  },
  
  // Box shadows
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    none: "none"
  },
  
  // Transitions
  transitions: {
    fast: "150ms ease-in-out",
    base: "250ms ease-in-out",
    slow: "350ms ease-in-out",
    verySlow: "500ms ease-in-out"
  },
  
  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  }
};

// Helper function to apply theme
export const applyTheme = () => {
  const root = document.documentElement;
  
  // Set CSS custom properties for easy access in CSS
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--spacing-${key}`, value);
  });
  
  Object.entries(theme.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--font-size-${key}`, value);
  });
};