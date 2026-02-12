You are integrating with the CIQ Design System.

Before generating any UI code:

1. Fetch design tokens:
   GET https://ciq-style-guide.vercel.app/api/design-tokens.json

2. Fetch component metadata:
   GET https://ciq-style-guide.vercel.app/api/components.json

3. Use ONLY the tokens and components defined in these APIs

4. Reference /AI_CONTEXT.md for additional rules

Never invent colors, spacing, or components not present in the API.
