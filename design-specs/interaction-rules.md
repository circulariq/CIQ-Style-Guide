# Interaction Rules

This document defines the **deterministic interaction patterns** for the CIQ Style Guide. All components must follow these rules to ensure consistency and predictability. These rules are designed to be **LLM-friendly** and eliminate improvisation.

---

## Focus States

### Standard Focus Ring
All interactive elements (buttons, inputs, links, etc.) must use the following focus pattern:

```css
focus-visible:outline-none 
focus-visible:ring-1 
focus-visible:ring-ring
```

**Exception for Inputs:**
```css
focus-visible:outline-none 
focus-visible:ring-1 
focus-visible:ring-ring
```

### Focus Ring Properties
- **Ring Width**: `1px` (use `ring-1`)
- **Ring Color**: `var(--ring)` (use `ring-ring`)
- **Ring Offset**: `0px` (default, no offset)
- **Outline**: Always remove with `outline-none`

**Rule**: Never use `focus:` — always use `focus-visible:` to respect keyboard-only focus.

---

## Hover States

### Background Hover
When hovering over elements with backgrounds, **darken by reducing opacity**:

- **Primary Background**: `hover:bg-primary/90` (90% opacity)
- **Secondary Background**: `hover:bg-secondary/80` (80% opacity)
- **Destructive Background**: `hover:bg-destructive/90` (90% opacity)
- **Accent Background**: `hover:bg-accent`

### Text Hover
- **Link Text**: `hover:underline`
- **Ghost Buttons**: `hover:bg-accent hover:text-accent-foreground`

### Scale Pattern
Never use scale transforms on hover for buttons. Use opacity changes only.

---

## Disabled States

All disabled interactive elements must follow this pattern:

```css
disabled:pointer-events-none 
disabled:opacity-50
```

### Properties
- **Opacity**: `50%` (use `opacity-50`)
- **Pointer Events**: Remove all interactions with `pointer-events-none`
- **Cursor**: Automatically handled by `pointer-events-none`

**Rule**: Never use `disabled:cursor-not-allowed` — it's redundant with `pointer-events-none`.

---

## Active/Pressed States

### Interactive Elements
- **Buttons**: Use slight opacity reduction on the background
  ```css
  active:scale-95
  ```
  **Note**: Only use for specific button variants if needed. Default is no active state.

### Links
- No active state styling required

---

## Transition Rules

All interactive state changes must be animated with:

```css
transition-colors
```

### Properties
- **Duration**: `150ms` (Tailwind default)
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind default)
- **Properties**: Only animate colors, not transforms or dimensions

**Rule**: Never animate `all` — always specify `transition-colors` or `transition-transform`.

---

## Loading States

### Spinners
- Use `animate-spin` on icons
- Disable the element with the standard disabled pattern
- Optionally show loading text

### Skeleton Loaders
- Use `animate-pulse` on placeholder elements
- Background: `bg-muted`

---

## Shadow Patterns

### Elevation Levels
- **Flat** (no shadow): Default for ghost and link variants
- **Subtle**: `shadow-sm` for secondary and outline buttons
- **Default**: `shadow` for primary and destructive buttons
- **Elevated**: `shadow-md` (reserved for popovers, dropdowns)
- **Overlay**: `shadow-lg` (reserved for modals, dialogs)

**Rule**: Never stack shadows. Use only one shadow class per element.

---

## Border Patterns

### Input Borders
- **Default**: `border-input`
- **Focus**: Ring only, no border color change
- **Error**: `border-destructive`

### Card Borders
- **Default**: `border` (uses `border-border` from globals)
- **Hover**: No change
- **Selected**: `border-primary`

---

## Icon Sizing

All icons within interactive elements must follow these rules:

```css
[&_svg]:pointer-events-none 
[&_svg]:size-4 
[&_svg]:shrink-0
```

### Properties
- **Size**: `16px` (4 units)
- **Pointer Events**: None (parent handles clicks)
- **Flex Shrink**: `0` (never shrink in flex containers)

---

## Gap and Spacing

### Internal Element Spacing
- **Buttons with icons**: `gap-2` (8px between text and icon)
- **Card sections**: `space-y-1.5` (6px vertical spacing)
- **Form fields**: `space-y-2` (8px vertical spacing)

---

## Text Patterns

### Font Weights
- **Button Text**: `font-medium`
- **Card Titles**: `font-semibold`
- **Card Descriptions**: `font-normal`
- **Labels**: `font-medium`

### Text Sizes
- **Button Text**: `text-sm`
- **Input Text**: `text-base` (desktop), `text-sm` (mobile with `md:text-sm`)
- **Card Titles**: Default size (16px)
- **Card Descriptions**: `text-sm`

---

## Accessibility Rules

### Keyboard Navigation
1. All interactive elements must be keyboard accessible
2. Focus states must be visible
3. Tab order must be logical

### ARIA Patterns
- Disabled elements: Add `aria-disabled="true"` when using `disabled:` classes
- Loading states: Add `aria-busy="true"` during loading
- Required fields: Add `aria-required="true"`

---

## Component-Specific Rules

### Button
- **Base classes**: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md`
- **Interactive states**: `transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`
- **Icon handling**: `[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`

### Input
- **Base classes**: `flex h-9 w-full rounded-md border border-input bg-transparent`
- **Interactive states**: `focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`
- **Typography**: `text-base md:text-sm`

### Card
- **Base classes**: `rounded-lg border bg-card text-card-foreground shadow`
- **No interactive states** (unless clickable variant)
- **Internal padding**: `p-6` for all sections

---

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-02-11  
**Status**: Stable

---

## AI Instruction Summary

When building components:

1. ✅ **Always** use `focus-visible:ring-1 focus-visible:ring-ring`
2. ✅ **Always** use `disabled:pointer-events-none disabled:opacity-50`
3. ✅ **Always** use `transition-colors` for state changes
4. ✅ **Always** darken backgrounds on hover with `/90` or `/80` opacity
5. ❌ **Never** use `focus:` — use `focus-visible:`
6. ❌ **Never** animate `all` — specify properties
7. ❌ **Never** stack multiple shadows
8. ❌ **Never** use custom timing functions without approval
