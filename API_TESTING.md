# API Endpoint Verification

## Quick Test

Open these URLs in your browser to verify the API is working:

1. **Design Tokens**:
   ```
   http://localhost:5174/api/design-tokens.json
   ```
   Expected: JSON response with color, spacing, radius, and typography tokens

2. **Components**:
   ```
   http://localhost:5174/api/components.json
   ```
   Expected: JSON response with component metadata, variants, and examples

3. **Version Info**:
   ```
   http://localhost:5174/api/version.json
   ```
   Expected: JSON response with version, endpoints, and system information

## cURL Testing

```bash
# Test design tokens
curl http://localhost:5174/api/design-tokens.json | jq .

# Test components
curl http://localhost:5174/api/components.json | jq .

# Test version
curl http://localhost:5174/api/version.json | jq .
```

## JavaScript Fetch Example

```javascript
// Open browser console at http://localhost:5174 and run:

// Test all endpoints
const endpoints = [
  '/api/design-tokens.json',
  '/api/components.json',
  '/api/version.json'
];

for (const endpoint of endpoints) {
  fetch(endpoint)
    .then(r => r.json())
    .then(data => console.log(endpoint, data))
    .catch(err => console.error(endpoint, err));
}
```

## Expected Response Samples

### /api/design-tokens.json
```json
{
  "version": "1.0.0",
  "tokens": {
    "color": {
      "primary": { "500": "#10b981", "600": "#059669" }
    }
  }
}
```

### /api/components.json
```json
{
  "version": "1.0.0",
  "components": [
    {
      "id": "button",
      "name": "Button",
      "category": "Interactive"
    }
  ]
}
```

### /api/version.json
```json
{
  "version": "1.0.0",
  "systemInfo": {
    "name": "CIQ Style Guide",
    "status": "Stable"
  }
}
```

## Troubleshooting

If endpoints return 404:
1. Make sure dev server is running: `npm run dev`
2. Verify files exist in `design-system/public/api/`
3. Clear browser cache and retry
4. Check vite.config.ts for public directory configuration
