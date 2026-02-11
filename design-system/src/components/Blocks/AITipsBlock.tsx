import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Terminal, Package, Folder, FileCode, Zap, BookOpen, Code2, Palette } from "lucide-react"

export function AITipsBlock() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold mb-2">AI Tips & Developer Guide</h1>
                <p className="text-muted-foreground">
                    Everything an AI agent or developer needs to run and maintain this design system
                </p>
            </div>

            {/* Quick Start */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Quick Start
                    </CardTitle>
                    <CardDescription>Get the project running in 3 steps</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-2">
                        <div><span className="text-muted-foreground"># 1. Navigate to design-system</span></div>
                        <div>cd design-system</div>
                        <div className="mt-2"><span className="text-muted-foreground"># 2. Install dependencies</span></div>
                        <div>npm install</div>
                        <div className="mt-2"><span className="text-muted-foreground"># 3. Start dev server</span></div>
                        <div>npm run dev</div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        → Access at <code className="bg-muted px-2 py-1 rounded">http://localhost:5174</code>
                    </p>
                </CardContent>
            </Card>

            {/* Project Structure */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Folder className="h-5 w-5" />
                        Project Structure
                    </CardTitle>
                    <CardDescription>Key directories and their purpose</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-tokens/tokens.json</strong>
                                <p className="text-muted-foreground text-xs">Source of truth for all design values</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-specs/interaction-rules.md</strong>
                                <p className="text-muted-foreground text-xs">Interaction patterns and state rules</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/src/components/ui/</strong>
                                <p className="text-muted-foreground text-xs">Reusable UI components (Button, Card, etc.)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/src/index.css</strong>
                                <p className="text-muted-foreground text-xs">Global styles + CSS variables</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/tailwind.config.ts</strong>
                                <p className="text-muted-foreground text-xs">Tailwind configuration</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/public/api/*.json</strong>
                                <p className="text-muted-foreground text-xs">Machine-readable API endpoints</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design Tokens */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="h-5 w-5" />
                        Design Tokens
                    </CardTitle>
                    <CardDescription>Complete visual reference of all design tokens</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Primary Colors */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Primary Colors (Emerald)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <div className="w-12 h-12 rounded-md shadow-sm" style={{ backgroundColor: '#ecfdf5' }}></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary-50</div>
                                    <div className="text-xs text-muted-foreground">#ecfdf5</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <div className="w-12 h-12 rounded-md shadow-sm" style={{ backgroundColor: '#d1fae5' }}></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary-100</div>
                                    <div className="text-xs text-muted-foreground">#d1fae5</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <div className="w-12 h-12 rounded-md shadow-sm" style={{ backgroundColor: '#10b981' }}></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary-500</div>
                                    <div className="text-xs text-muted-foreground">#10b981</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <div className="w-12 h-12 rounded-md shadow-sm" style={{ backgroundColor: '#059669' }}></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary-600 ⭐</div>
                                    <div className="text-xs text-muted-foreground">#059669</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                                <div className="w-12 h-12 rounded-md shadow-sm" style={{ backgroundColor: '#047857' }}></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary-700</div>
                                    <div className="text-xs text-muted-foreground">#047857</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gray Colors */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Gray Scale (Neutral)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm border" style={{ backgroundColor: '#f9fafb' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-50</div>
                                    <div className="text-muted-foreground">#f9fafb</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm border" style={{ backgroundColor: '#f3f4f6' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-100</div>
                                    <div className="text-muted-foreground">#f3f4f6</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#e5e7eb' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-200</div>
                                    <div className="text-muted-foreground">#e5e7eb</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#d1d5db' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-300</div>
                                    <div className="text-muted-foreground">#d1d5db</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#9ca3af' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-400</div>
                                    <div className="text-muted-foreground">#9ca3af</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#6b7280' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold">gray-500</div>
                                    <div className="text-muted-foreground">#6b7280</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#4b5563' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold text-white">gray-600</div>
                                    <div className="text-gray-300">#4b5563</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#374151' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold text-white">gray-700</div>
                                    <div className="text-gray-300">#374151</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#1f2937' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold text-white">gray-800</div>
                                    <div className="text-gray-300">#1f2937</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                                <div className="w-10 h-10 rounded-md shadow-sm" style={{ backgroundColor: '#111827' }}></div>
                                <div className="text-xs">
                                    <div className="font-mono font-semibold text-white">gray-900</div>
                                    <div className="text-gray-300">#111827</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacing */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Spacing Scale</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-sm font-mono font-semibold">xs (4px)</div>
                                <div className="h-8 bg-primary rounded" style={{ width: '4px' }}></div>
                                <code className="text-xs text-muted-foreground">p-1 / gap-1</code>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-sm font-mono font-semibold">sm (8px)</div>
                                <div className="h-8 bg-primary rounded" style={{ width: '8px' }}></div>
                                <code className="text-xs text-muted-foreground">p-2 / gap-2</code>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-sm font-mono font-semibold">md (16px) ⭐</div>
                                <div className="h-8 bg-primary rounded" style={{ width: '16px' }}></div>
                                <code className="text-xs text-muted-foreground">p-4 / gap-4</code>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-sm font-mono font-semibold">lg (24px)</div>
                                <div className="h-8 bg-primary rounded" style={{ width: '24px' }}></div>
                                <code className="text-xs text-muted-foreground">p-6 / gap-6</code>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-24 text-sm font-mono font-semibold">xl (32px)</div>
                                <div className="h-8 bg-primary rounded" style={{ width: '32px' }}></div>
                                <code className="text-xs text-muted-foreground">p-8 / gap-8</code>
                            </div>
                        </div>
                    </div>

                    {/* Border Radius */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Border Radius</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-primary mb-2" style={{ borderRadius: '4px' }}></div>
                                <div className="text-sm font-mono font-semibold">sm (4px)</div>
                                <code className="text-xs text-muted-foreground">rounded-sm</code>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-primary mb-2" style={{ borderRadius: '8px' }}></div>
                                <div className="text-sm font-mono font-semibold">md (8px) ⭐</div>
                                <code className="text-xs text-muted-foreground">rounded-md</code>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-primary mb-2" style={{ borderRadius: '12px' }}></div>
                                <div className="text-sm font-mono font-semibold">lg (12px)</div>
                                <code className="text-xs text-muted-foreground">rounded-lg</code>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 mx-auto bg-primary mb-2" style={{ borderRadius: '16px' }}></div>
                                <div className="text-sm font-mono font-semibold">xl (16px)</div>
                                <code className="text-xs text-muted-foreground">rounded-xl</code>
                            </div>
                        </div>
                    </div>

                    {/* Typography */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Typography Scale</h4>
                        <div className="space-y-3">
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">xs (12px)</div>
                                <div style={{ fontSize: '12px' }}>The quick brown fox jumps</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-xs</code>
                            </div>
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">sm (14px) ⭐</div>
                                <div style={{ fontSize: '14px' }}>The quick brown fox jumps</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-sm</code>
                            </div>
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">base (16px)</div>
                                <div style={{ fontSize: '16px' }}>The quick brown fox jumps</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-base</code>
                            </div>
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">lg (18px)</div>
                                <div style={{ fontSize: '18px' }}>The quick brown fox jumps</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-lg</code>
                            </div>
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">xl (24px)</div>
                                <div style={{ fontSize: '24px' }}>The quick brown fox</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-xl</code>
                            </div>
                            <div className="flex items-baseline gap-4 p-3 bg-muted rounded-md">
                                <div className="w-24 text-sm font-mono font-semibold">2xl (32px)</div>
                                <div style={{ fontSize: '32px' }}>The quick brown</div>
                                <code className="ml-auto text-xs text-muted-foreground">text-2xl</code>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                            <p className="text-sm text-blue-800 dark:text-blue-200">
                                <strong>Font Family:</strong> <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Figtree, sans-serif</code>
                            </p>
                        </div>
                    </div>

                    {/* Semantic Tokens */}
                    <div>
                        <h4 className="font-semibold mb-3 text-base">Semantic Color Tokens</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                            These are mapped to the raw color tokens and should be used in components
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-background border"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">background</div>
                                    <div className="text-xs text-muted-foreground">→ gray-50</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-foreground"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">foreground</div>
                                    <div className="text-xs text-muted-foreground">→ gray-900</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-primary"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">primary</div>
                                    <div className="text-xs text-muted-foreground">→ primary-600</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-secondary border"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">secondary</div>
                                    <div className="text-xs text-muted-foreground">→ gray-200</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-muted border"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">muted</div>
                                    <div className="text-xs text-muted-foreground">→ gray-100</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-accent border"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">accent</div>
                                    <div className="text-xs text-muted-foreground">→ gray-100</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded bg-destructive"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">destructive</div>
                                    <div className="text-xs text-muted-foreground">→ #ef4444 (red)</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-md">
                                <div className="w-10 h-10 rounded border-2 border-border bg-background"></div>
                                <div className="text-sm">
                                    <div className="font-mono font-semibold">border</div>
                                    <div className="text-xs text-muted-foreground">→ gray-200</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Token Usage Note */}
                    <div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md">
                        <h5 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">💡 Token Usage Guidelines</h5>
                        <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1 list-disc list-inside">
                            <li>Use <strong>semantic tokens</strong> (bg-primary, text-foreground) in components when possible</li>
                            <li>Use <strong>raw tokens</strong> (primary-600, gray-200) for one-off custom colors</li>
                            <li>Never use arbitrary values like <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">[#123456]</code></li>
                            <li>All tokens are defined in <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">/design-tokens/tokens.json</code></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            {/* Common Commands */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        Common Commands
                    </CardTitle>
                    <CardDescription>Essential commands for development</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run dev</div>
                            <p className="text-xs text-muted-foreground">Start development server</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run build</div>
                            <p className="text-xs text-muted-foreground">Build for production</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run sync-tokens</div>
                            <p className="text-xs text-muted-foreground">Generate tokens.css from tokens.json</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npx shadcn add [component-name]</div>
                            <p className="text-xs text-muted-foreground">Add new shadcn component</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* API Endpoints */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Code2 className="h-5 w-5" />
                        Machine-Readable API
                    </CardTitle>
                    <CardDescription>Fetch design system data programmatically</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div className="bg-muted p-3 rounded-md">
                        <div className="font-mono text-sm mb-1">/api/design-tokens.json</div>
                        <p className="text-xs text-muted-foreground">All design tokens with versioning</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                        <div className="font-mono text-sm mb-1">/api/components.json</div>
                        <p className="text-xs text-muted-foreground">Component metadata, variants, and examples</p>
                    </div>
                    <div className="bg-muted p-3 rounded-md">
                        <div className="font-mono text-sm mb-1">/api/version.json</div>
                        <p className="text-xs text-muted-foreground">Version info and system metadata</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 p-3 rounded-md">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                            💡 AI agents can fetch these endpoints to get real-time design system data
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Critical Rules */}
            <Card className="border-primary">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Critical Rules for AI
                    </CardTitle>
                    <CardDescription>Follow these to maintain consistency</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ ALWAYS</h4>
                            <ul className="space-y-1 text-sm list-disc list-inside">
                                <li>Use defined token names from <code className="bg-muted px-1 rounded">/design-tokens/tokens.json</code></li>
                                <li>Include focus states: <code className="bg-muted px-1 rounded">focus-visible:ring-1 focus-visible:ring-ring</code></li>
                                <li>Include disabled states: <code className="bg-muted px-1 rounded">disabled:pointer-events-none disabled:opacity-50</code></li>
                                <li>Use <code className="bg-muted px-1 rounded">transition-colors</code> for state changes</li>
                                <li>Default to <code className="bg-muted px-1 rounded">md</code> size unless specified</li>
                                <li>Check <code className="bg-muted px-1 rounded">/design-specs/interaction-rules.md</code> before creating interactions</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ NEVER</h4>
                            <ul className="space-y-1 text-sm list-disc list-inside">
                                <li>Invent colors not in tokens.json</li>
                                <li>Use arbitrary values like <code className="bg-muted px-1 rounded">p-[17px]</code></li>
                                <li>Use <code className="bg-muted px-1 rounded">transition-all</code> (always specify properties)</li>
                                <li>Use <code className="bg-muted px-1 rounded">focus:</code> (always use <code className="bg-muted px-1 rounded">focus-visible:</code>)</li>
                                <li>Stack multiple shadows</li>
                                <li>Create component variants without approval</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Component Usage */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        Quick Component Reference
                    </CardTitle>
                    <CardDescription>Most commonly used components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Button</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Button variant="default" size="md">Click</Button>`}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Variants: default, destructive, outline, secondary, ghost, link
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Card</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Input</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Input type="text" placeholder="Enter..." />`}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Essential Documentation */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        Essential Documentation
                    </CardTitle>
                    <CardDescription>Key files to read before making changes</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Badge>Required</Badge>
                            <code>/AI_CONTEXT.md</code>
                            <span className="text-muted-foreground">— Complete AI context</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge>Required</Badge>
                            <code>/design-specs/interaction-rules.md</code>
                            <span className="text-muted-foreground">— State patterns</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge>Optional</Badge>
                            <code>/API_DOCUMENTATION.md</code>
                            <span className="text-muted-foreground">— API usage guide</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge>Optional</Badge>
                            <code>/README.md</code>
                            <span className="text-muted-foreground">— Project overview</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Troubleshooting */}
            <Card>
                <CardHeader>
                    <CardTitle>Troubleshooting</CardTitle>
                    <CardDescription>Common issues and solutions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Components have no padding/radius</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            CSS variables may not be loading. Check that <code className="bg-muted px-1 rounded">src/index.css</code> has
                            inlined token values in the <code className="bg-muted px-1 rounded">:root</code> block.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Token changes not reflecting</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Run <code className="bg-muted px-1 rounded">npm run sync-tokens</code> to regenerate CSS from
                            <code className="bg-muted px-1 rounded">tokens.json</code>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Component not found</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Add it with <code className="bg-muted px-1 rounded">npx shadcn add [component-name]</code>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Port 5174 already in use</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Kill the process or use <code className="bg-muted px-1 rounded">npm run dev -- --port 3000</code>
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Version Information */}
            <Card className="bg-muted/50">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between text-sm">
                        <div>
                            <strong>Design System Version:</strong> 1.0.0
                        </div>
                        <div className="text-muted-foreground">
                            Last Updated: 2026-02-11
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
