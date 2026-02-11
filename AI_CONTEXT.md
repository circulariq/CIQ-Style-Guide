# AI Context: CIQ Style Guide

**📋 Paste this into any LLM before requesting UI work to ensure consistency.**

---

## Tech Stack

This project uses:

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **CSS Framework**: Tailwind CSS (JIT mode)
- **Component Library**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React, Radix Icons, Huge Icons
- **Form Management**: React Hook Form + Zod
- **Styling Utilities**: CVA (Class Variance Authority)
- **Typography**: Figtree (primary font)

---

## Design System Tokens

### Color System
**Primary Scale**: Emerald/Green
- `primary-50`: `#ecfdf5` (lightest)
- `primary-100`: `#d1fae5`
- `primary-500`: `#10b981` (base)
- `primary-600`: `#059669` (default interactive)
- `primary-700`: `#047857` (dark)

**Gray Scale**: Full 50-900 range
- Complete neutral palette from `gray-50` to `gray-900`
- See `/design-tokens/tokens.json` for exact values

### Spacing Scale
- `xs`: 4px
- `sm`: 8px  
- `md`: 16px ⭐ (default)
- `lg`: 24px
- `xl`: 32px

### Border Radius System
- `sm`: 4px
- `md`: 8px ⭐ (default)
- `lg`: 12px
- `xl`: 16px

### Typography Scale
- **Font Family**: Figtree, sans-serif
- **Sizes**:
  - `xs`: 12px
  - `sm`: 14px ⭐ (most UI text)
  - `base`: 16px
  - `lg`: 18px
  - `xl`: 24px
  - `2xl`: 32px

---

## Critical Rules

### ❌ NEVER Do This:
1. Invent colors not in tokens.json (ask for approval before using new colors)
2. Use arbitrary values like p-[17px], w-[234px], etc.
3. Use transition-all (always specify properties)
4. Use focus: (always use focus-visible:)
5. Stack multiple shadows
6. Create component variants without approval

### ✅ ALWAYS Do This:
1. Use defined token names from /design-tokens/tokens.json
2. Include focus states: focus-visible:ring-1 focus-visible:ring-ring
3. Include disabled states: disabled:pointer-events-none disabled:opacity-50
4. Use transition-colors for state changes
5. Default to md size unless specified
6. Check /design-specs/interaction-rules.md before creating interactions

---

## File Structure

```
CIQ-Style-Guide-01/
├── design-tokens/
│   └── tokens.json              ← Source of truth for all design values
├── design-specs/
│   └── interaction-rules.md     ← Interaction patterns and state rules
├── design-system/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/              ← shadcn components (Button, Card, etc.)
│   │   ├── index.css            ← Global styles + CSS variables
│   │   └── tailwind.config.ts   ← Tailwind configuration
│   └── scripts/
│       └── sync-tokens.cjs      ← Generates tokens.css from tokens.json
```

---

## Component Standards

### Button
```tsx
<Button variant="default" size="md">
  Click me
</Button>
```

**Available Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`  
**Available Sizes**: `sm`, `default`, `lg`, `icon`

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

**Standard Padding**: `p-6` (24px)

### Input
```tsx
<Input type="text" placeholder="Enter text..." />
```

**Standard Height**: `h-9` (36px)  
**Standard Padding**: `px-3 py-1`

---

## Quick Decision Tree

### "What spacing should I use?"
1. Check if it's internal padding → Use `p-6` (24px)
2. Check if it's gap between elements → Use `gap-2` (8px)
3. Check if it's vertical spacing → Use `space-y-4` (16px)
4. **Default**: Use `md` value from spacing scale (16px)

### "What color should I use?"
1. Is it a primary action? → `bg-primary` + `text-primary-foreground`
2. Is it a secondary action? → `bg-secondary` + `text-secondary-foreground`
3. Is it destructive? → `bg-destructive` + `text-destructive-foreground`
4. Is it neutral/subtle? → `bg-muted` + `text-muted-foreground`
5. Is it text? → `text-foreground` (default) or `text-muted-foreground` (subtle)

### "What radius should I use?"
1. Buttons, inputs, small cards → `rounded-md` (8px)
2. Large cards, containers → `rounded-lg` (12px)
3. Pills, badges → `rounded-full`
4. **Default**: `rounded-md`

### "What hover state should I use?"
1. Solid background → Reduce opacity to `/90` or `/80`
   - Example: `hover:bg-primary/90`
2. Ghost/transparent → Add accent background
   - Example: `hover:bg-accent hover:text-accent-foreground`
3. Links → Add underline
   - Example: `hover:underline`

---

## Common Patterns

### Focus Ring (Required for all interactive elements)
```tsx
className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
```

### Disabled State (Required for all interactive elements)
```tsx
className="disabled:pointer-events-none disabled:opacity-50"
```

### Icon in Button
```tsx
className="[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
```

### Responsive Text Size
```tsx
className="text-base md:text-sm"
```

---

## Workflow for Making Changes

### Adding a New Component
1. ✅ Check if shadcn has it: `npx shadcn add [component-name]`
2. ✅ Review `/design-specs/interaction-rules.md` for state patterns
3. ✅ Use only colors from `/design-tokens/tokens.json`
4. ✅ Follow existing component patterns in `src/components/ui/`
5. ✅ Test all variants and states

### Modifying Design Tokens
1. ✅ Edit `/design-tokens/tokens.json`
2. ✅ Run `npm run sync-tokens` to regenerate CSS
3. ✅ Verify changes in browser at `http://localhost:5174`

### Adding a New Color
1. ❌ **STOP** — Do not add colors without design approval
2. ✅ If approved, add to `/design-tokens/tokens.json`
3. ✅ Run `npm run sync-tokens`
4. ✅ Update this document with new color

---

## Semantic Token Mappings

These variables are mapped to design tokens and should be used as semantic aliases:

- `--background` → `gray-50` (light mode)
- `--foreground` → `gray-900` (light mode)
- `--primary` → `primary-600`
- `--secondary` → `gray-200`
- `--muted` → `gray-100`
- `--accent` → `gray-100`
- `--destructive` → `#ef4444` (red)
- `--border` → `gray-200`
- `--ring` → `primary-500`

**Use semantic names** (`bg-primary`) instead of raw tokens (`bg-primary-600`) when possible.

---

## Testing Checklist

Before submitting any UI work, verify:

- [ ] All colors come from design tokens
- [ ] All spacing uses the defined scale
- [ ] Focus states are visible and use `focus-visible:`
- [ ] Disabled states use `disabled:pointer-events-none disabled:opacity-50`
- [ ] Hover states follow the interaction rules
- [ ] No arbitrary values (`[17px]`, `[#abc123]`, etc.)
- [ ] Component works in both light and dark mode (if applicable)
- [ ] Responsive behavior is correct
- [ ] No console errors or warnings

---

## Version

**Version**: 1.0.0  
**Last Updated**: 2026-02-11  
**Status**: Active

---

## Quick Links

- **Design Tokens**: `/design-tokens/tokens.json`
- **Interaction Rules**: `/design-specs/interaction-rules.md`
- **Component Library**: `design-system/src/components/ui/`
- **Tailwind Config**: `design-system/tailwind.config.ts`
- **Live Demo**: `http://localhost:5174`

---

## Example Prompt for AI

When asking an AI to create a component:

```
Create a Button component following the CIQ Style Guide.

Requirements:
- Use the Button component from /src/components/ui/button.tsx
- Variant: "default"
- Size: "md" (default)
- Include an icon from lucide-react
- Follow interaction rules from /design-specs/interaction-rules.md
- Only use colors and spacing from /design-tokens/tokens.json

Do NOT:
- Invent new colors
- Use arbitrary spacing values
- Create custom variants
```

---

**🎯 Key Takeaway**: This design system is **deterministic**. Every value, every pattern, every interaction is defined. When in doubt, check the source files. Never improvise.
