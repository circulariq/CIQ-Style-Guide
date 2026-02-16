# AI Context: CIQ Style Guide
**📋 Paste this into any LLM before requesting UI work to ensure consistency.**

---

## 🗺️ Site Navigation Map (For AI Agents)

**Before proceeding, familiarize yourself with available resources:**

| Page URL | Content Type | What You'll Find | When to Use |
|----------|--------------|------------------|-------------|
| `/ai-tips/ai` | **AI Context Guide** | Complete overview, rules, tokens, patterns | First stop - read this before any UI work |
| `/components/{name}` | **Individual Component Pages** | Live examples, variants, code snippets for specific components | When you need details about a specific component (e.g., `/components/button`) |
| `/component-preview` | **Component Gallery** | Overview of all available components | When browsing all components |
| `/design-tokens/tokens.json` | **Design Tokens (JSON)** | Source of truth for colors, spacing, typography values | When implementing specific design values |
| `/design-specs/interaction-rules.md` | **Interaction Patterns** | Hover, focus, disabled, active state specifications | When creating interactive elements |
| `/components/ui/` | **Component Source Code** | Actual React component implementations | When you need to see/modify component code |
| `http://localhost:5174` | **Local Development Server** | Live preview environment | For testing changes in real-time |

### 📖 How AI Should Use This Guide

**Step 1: READ THIS PAGE FIRST**
- Understand the tech stack, rules, and patterns
- Note the critical ❌ NEVER and ✅ ALWAYS rules

**Step 2: CHECK SPECIFIC RESOURCES**
- For exact color values → Fetch `/design-tokens/tokens.json`
- For component examples → Visit `/components/{component-name}` (see list below)
- For interaction behavior → Read `/design-specs/interaction-rules.md`

**Step 3: IMPLEMENT WITH CONFIDENCE**
- Use only approved tokens and patterns
- Follow the Quick Decision Trees below
- Reference Common Patterns section

### 📦 Available Components

The following components are available at `/components/{name}`:

**Layout & Structure**: Accordion, Aspect Ratio, Breadcrumb, Card, Carousel, Collapsible, Separator, Tabs

**Buttons & Actions**: Button, Button Group

**Form Elements**: Calendar, Checkbox, Combobox, Form, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea

**Feedback & Overlays**: Alert, Alert Dialog, Dialog, Drawer, Hover Card, Popover, Sheet, Toast, Tooltip

**Data Display**: Avatar, Badge, Chart, Data Table, Progress, Skeleton, Table

**Navigation**: Command, Context Menu, Dropdown Menu, Menubar, Navigation Menu, Pagination, Resizable, Scroll Area, Sidebar, Sonner

---

## 🤖 Instructions for AI Agents

### When Working on UI Tasks:

1. **Always fetch these resources in order:**
   ```
   FETCH: https://ciq-style-guide.vercel.app/ai-tips/ai
   FETCH: https://ciq-style-guide.vercel.app/design-tokens/tokens.json
   OPTIONAL: https://ciq-style-guide.vercel.app/design-specs/interaction-rules.md
   ```

2. **For component-specific work:**
   - Fetch the component preview to see visual examples
   - Check if shadcn/ui has the component: `npx shadcn add [component-name]`
   - Review existing implementations in `/components/ui/`

3. **Before submitting code:**
   - Run through the Testing Checklist at the bottom of this page
   - Verify all values come from tokens.json
   - Ensure accessibility patterns are followed

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
│   └── tokens.json ← Source of truth for all design values
├── design-specs/
│   └── interaction-rules.md ← Interaction patterns and state rules
├── design-system/
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/ ← shadcn components (Button, Card, etc.)
│   │   ├── index.css ← Global styles + CSS variables
│   │   └── tailwind.config.ts ← Tailwind configuration
│   └── scripts/
│       └── sync-tokens.cjs ← Generates tokens.css from tokens.json
```

---

## Component Standards

### Button
```tsx
<Button variant="default" size="default">
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

## ❓ Common AI Agent Questions

**Q: Where do I find the exact hex code for primary-600?**  
→ Fetch `/design-tokens/tokens.json` and look under `colors.primary[600]`

**Q: How do I know what component variants are available?**  
→ Visit `/components/{component-name}` (e.g., `/components/button`) to see all variants and examples

**Q: Can I use a custom color for this special case?**  
→ ❌ NO. See Critical Rules #1. Request design approval first.

**Q: What's the difference between `/design-tokens/tokens.json` and the tokens shown on this page?**  
→ This page shows commonly used values. `/design-tokens/tokens.json` is the complete source of truth with ALL values.

**Q: Where are the interaction rules for hover states?**  
→ `/design-specs/interaction-rules.md` OR use the Quick Decision Tree above for common cases

**Q: I need to see how a Button looks with all its variants. Where do I go?**  
→ Visit `/components/button` to see live interactive examples with code snippets

**Q: Can I use arbitrary Tailwind values like `p-[17px]` just this once?**  
→ ❌ NO. This is Critical Rule #2. Use the defined spacing scale only.

**Q: Do I need to add focus states manually to every button?**  
→ Yes, unless using the pre-built Button component which includes them already

**Q: What components are available in the design system?**  
→ See the "Available Components" list above, or visit `/component-preview` for a visual gallery

**Q: How do I know if a component has specific props or customization options?**  
→ Check the individual component page at `/components/{component-name}` for usage examples and API details

---

## Version & Updates

**Version**: 1.0.0  
**Last Updated**: 2026-02-11  
**Status**: Active

### 📝 Change Log

**v1.0.0** (2026-02-11)
- Initial release
- Established core design tokens
- Defined critical rules and patterns
- Created AI context documentation
- Added comprehensive navigation map for AI agents
- Included explicit fetch instructions
- Added Common AI Questions section

### For AI: Check this section on each visit
If version number has changed, re-read the entire document to understand updates.

---

## 🔗 Resource Quick Access

### For AI Agents (URLs to fetch):
- **This Context Guide**: `https://ciq-style-guide.vercel.app/ai-tips/ai`
- **Design Tokens (JSON)**: `https://ciq-style-guide.vercel.app/design-tokens/tokens.json`
- **Component Pages**: `https://ciq-style-guide.vercel.app/components/{component-name}`
  - Example: `https://ciq-style-guide.vercel.app/components/button`
  - Example: `https://ciq-style-guide.vercel.app/components/card`
- **Component Gallery**: `https://ciq-style-guide.vercel.app/component-preview`
- **Interaction Rules**: `https://ciq-style-guide.vercel.app/design-specs/interaction-rules.md`

### For Local Development (File paths):
- Design Tokens: `/design-tokens/tokens.json`
- Interaction Rules: `/design-specs/interaction-rules.md`
- Component Library: `design-system/src/components/ui/`
- Tailwind Config: `design-system/tailwind.config.ts`
- Live Demo: `http://localhost:5174`

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
