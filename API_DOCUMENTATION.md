# Design System API

**Machine-readable API endpoints for the CIQ Style Guide.**

This design system exposes a set of JSON API endpoints that allow AI agents, automated tools, and external applications to fetch design tokens, component metadata, and version information programmatically.

---

## Base URL

When running locally:
```
http://localhost:5174/api
```

When deployed:
```
https://your-domain.com/api
```

---

## Endpoints

### 1. Design Tokens

**Endpoint**: `/api/design-tokens`  
**Method**: `GET`  
**Response Type**: `application/json`

Returns all design tokens including:
- Color scales (Primary, Gray)
- Spacing scale
- Border radius scale
- Typography scale
- Semantic token mappings

**Example Request**:
```bash
curl http://localhost:5174/api/design-tokens.json
```

**Example Response**:
```json
{
  "version": "1.0.0",
  "lastUpdated": "2026-02-11T10:32:00Z",
  "tokens": {
    "color": {
      "primary": {
        "500": "#10b981",
        "600": "#059669"
      }
    },
    "spacing": {
      "md": "16px"
    }
  }
}
```

**Use Cases**:
- AI agents generating UI code
- Design tooling integrations (Figma plugins, etc.)
- Automated documentation generation
- Cross-platform token synchronization

---

### 2. Components

**Endpoint**: `/api/components`  
**Method**: `GET`  
**Response Type**: `application/json`

Returns component library metadata including:
- Component list with IDs and names
- Available variants and props
- Default styles
- Interaction states
- Usage examples
- Import paths

**Example Request**:
```bash
curl http://localhost:5174/api/components.json
```

**Example Response**:
```json
{
  "version": "1.0.0",
  "components": [
    {
      "id": "button",
      "name": "Button",
      "category": "Interactive",
      "variants": {
        "variant": {
          "default": "default",
          "options": ["default", "destructive", "outline"]
        }
      },
      "examples": [
        {
          "title": "Default Button",
          "code": "<Button>Click me</Button>"
        }
      ]
    }
  ]
}
```

**Use Cases**:
- AI code generation with correct component APIs
- IDE autocomplete extensions
- Component catalog generation
- API documentation tools

---

### 3. Version Information

**Endpoint**: `/api/version`  
**Method**: `GET`  
**Response Type**: `application/json`

Returns system metadata including:
- Current version
- Available endpoints
- Capabilities and feature flags
- Dependencies and compatibility
- Changelog

**Example Request**:
```bash
curl http://localhost:5174/api/version.json
```

**Example Response**:
```json
{
  "version": "1.0.0",
  "systemInfo": {
    "name": "CIQ Style Guide",
    "status": "Stable"
  },
  "endpoints": {
    "/api/design-tokens": {
      "description": "Returns all design tokens"
    }
  }
}
```

**Use Cases**:
- Version compatibility checks
- Feature detection
- API discovery
- Health monitoring

---

## Usage Examples

### Fetch Design Tokens (JavaScript)

```javascript
async function getDesignTokens() {
  const response = await fetch('http://localhost:5174/api/design-tokens.json');
  const data = await response.json();
  
  console.log('Primary color:', data.tokens.color.primary['600']);
  console.log('Spacing MD:', data.tokens.spacing.md);
  return data;
}
```

### Fetch Component Metadata (Python)

```python
import requests

def get_components():
    response = requests.get('http://localhost:5174/api/components.json')
    data = response.json()
    
    for component in data['components']:
        print(f"{component['name']} ({component['category']})")
    
    return data
```

### AI Agent Example (Prompt)

```
Fetch the CIQ design system tokens:

GET http://localhost:5174/api/design-tokens.json

Use these tokens to generate a Button component:
- Primary color: Use tokens.color.primary[600]
- Padding: Use tokens.spacing.md
- Border radius: Use tokens.radius.md

Verify component exists:
GET http://localhost:5174/api/components.json
- Find component with id: "button"
- Use the default variant
- Follow the examples provided
```

---

## Caching & Performance

All endpoints return `Cache-Control` headers:
- Design Tokens: `public, max-age=3600` (1 hour)
- Components: `public, max-age=3600` (1 hour)
- Version: `public, max-age=300` (5 minutes)

**Recommendation**: Cache responses on the client side to reduce requests.

---

## CORS Configuration

When deployed, ensure CORS is configured to allow cross-origin requests:

```json
{
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
}
```

---

## Response Format

All responses follow this structure:

```json
{
  "version": "1.0.0",
  "lastUpdated": "ISO 8601 timestamp",
  "data": { /* Endpoint-specific data */ },
  "metadata": { /* Optional metadata */ }
}
```

---

## Error Handling

### 404 Not Found
**Cause**: Endpoint does not exist  
**Response**:
```json
{
  "error": "Not Found",
  "message": "The requested resource does not exist",
  "statusCode": 404
}
```

### 500 Internal Server Error
**Cause**: Server error  
**Response**:
```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred",
  "statusCode": 500
}
```

---

## Versioning Strategy

The API uses semantic versioning (SemVer):
- **Major version** (1.x.x): Breaking changes to API structure
- **Minor version** (x.1.x): New features, backwards compatible
- **Patch version** (x.x.1): Bug fixes

**Current Version**: `1.0.0`

When the API version changes, the endpoint URLs will remain stable, but the `version` field in responses will update.

---

## Enterprise Features

### 1. Token Synchronization
AI agents can poll `/api/design-tokens` to detect token changes:

```javascript
let lastVersion = null;

setInterval(async () => {
  const data = await fetch('/api/design-tokens.json').then(r => r.json());
  
  if (lastVersion !== data.version) {
    console.log('Design tokens updated!');
    updateStyles(data.tokens);
    lastVersion = data.version;
  }
}, 60000); // Check every minute
```

### 2. Component Discovery
Build dynamic component pickers using `/api/components`:

```javascript
const components = await fetch('/api/components.json').then(r => r.json());

const componentList = components.components.map(c => ({
  id: c.id,
  name: c.name,
  category: c.category,
  path: c.path
}));

// Render in UI picker
renderComponentPalette(componentList);
```

### 3. Version Compatibility Check
Verify system compatibility before integration:

```javascript
const versionInfo = await fetch('/api/version.json').then(r => r.json());

if (versionInfo.compatibility.node !== '>=18.0.0') {
  console.warn('Node version incompatible');
}
```

---

## Deployment

### Static Hosting (Recommended)
The API files are in `design-system/public/api/`. When you build with Vite:

```bash
npm run build
```

The files are copied to `dist/api/` and can be served by any static host (Vercel, Netlify, etc.).

### Dynamic API Server (Optional)
For enterprise use cases requiring:
- Authentication
- Rate limiting
- Real-time updates
- Analytics

Consider wrapping these endpoints in an Express/Fastify server.

---

## Access from AI Agents

**Example LLM Prompt**:

```
You are integrating with the CIQ Design System.

Before generating any UI code:

1. Fetch design tokens:
   GET http://your-domain.com/api/design-tokens.json

2. Fetch component metadata:
   GET http://your-domain.com/api/components.json

3. Use ONLY the tokens and components defined in these APIs

4. Reference /AI_CONTEXT.md for additional rules

Never invent colors, spacing, or components not present in the API.
```

---

## Support

For issues or questions about the API:
- Check `/AI_CONTEXT.md` for context
- Review `/design-specs/interaction-rules.md` for patterns
- Inspect the JSON files directly in `public/api/`

---

**Version**: 1.0.0  
**Last Updated**: 2026-02-11  
**Status**: Production Ready
