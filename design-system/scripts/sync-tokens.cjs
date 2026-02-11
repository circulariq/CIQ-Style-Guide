const fs = require('fs');
const path = require('path');

const tokensPath = path.resolve(__dirname, '../../design-tokens/tokens.json');
const cssOutputPath = path.resolve(__dirname, '../src/tokens.css');

function generateCSS(tokens) {
  let css = ':root {\n';

  // Helper to flatten nested objects into CSS variables
  function processTokens(obj, prefix = '') {
    for (const key in obj) {
      const value = obj[key];
      const variableName = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'object' && value !== null) {
        processTokens(value, variableName);
      } else {
        css += `  --${variableName}: ${value};\n`;
      }
    }
  }

  processTokens(tokens);
  css += '}\n';
  return css;
}

try {
  const tokensData = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  const cssContent = generateCSS(tokensData);
  fs.writeFileSync(cssOutputPath, cssContent);
  console.log('✅ Tokens synced to CSS successfully!');
} catch (error) {
  console.error('❌ Error syncing tokens:', error);
}
