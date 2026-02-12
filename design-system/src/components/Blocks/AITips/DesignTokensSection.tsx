import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette } from "lucide-react"

export function DesignTokensSection() {
    return (
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

                {/* Light Theme Colors */}
                <div>
                    <h4 className="font-semibold mb-3 text-base">Light Theme Colors</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                        Color mappings for light mode (default theme)
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 border rounded-md bg-[#f9fafb]">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#f9fafb' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">background</div>
                                <div className="text-xs text-muted-foreground">#f9fafb (gray-50)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#111827' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">foreground</div>
                                <div className="text-xs text-muted-foreground">#111827 (gray-900)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#059669' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">primary</div>
                                <div className="text-xs text-muted-foreground">#059669 (primary-600)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md bg-[#ecfdf5]">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ecfdf5' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">primary-foreground</div>
                                <div className="text-xs text-muted-foreground">#ecfdf5 (primary-50)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md bg-[#e5e7eb]">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#e5e7eb' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">border</div>
                                <div className="text-xs text-muted-foreground">#e5e7eb (gray-200)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md">
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ef4444' }}></div>
                            <div className="text-sm">
                                <div className="font-mono font-semibold">destructive</div>
                                <div className="text-xs text-muted-foreground">#ef4444 (red)</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded-md">
                        <p className="text-xs text-gray-700">
                            <strong>OKLCH Values:</strong> Light theme uses standard hex colors converted to OKLCH for perceptual uniformity
                        </p>
                    </div>
                </div>

                {/* Dark Theme Colors */}
                <div>
                    <h4 className="font-semibold mb-3 text-base">Dark Theme Colors</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                        Color mappings for dark mode using OKLCH color space
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded border border-gray-600" style={{ backgroundColor: '#111827' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">background</div>
                                <div className="text-xs text-gray-300">oklch(0.13 0.028 261.692)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#f9fafb' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">foreground</div>
                                <div className="text-xs text-gray-300">oklch(0.985 0.002 247.839)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#10b981' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">primary</div>
                                <div className="text-xs text-gray-300">oklch(0.70 0.15 162)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded border" style={{ backgroundColor: '#047857' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">primary-foreground</div>
                                <div className="text-xs text-gray-300">oklch(0.50 0.12 164)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded border border-gray-700" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">border</div>
                                <div className="text-xs text-gray-300">oklch(1 0 0 / 10%)</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                            <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ef4444' }}></div>
                            <div className="text-sm text-white">
                                <div className="font-mono font-semibold">destructive</div>
                                <div className="text-xs text-gray-300">oklch(0.704 0.191 22.216)</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                            <strong>Why OKLCH?</strong> OKLCH provides perceptually uniform colors, meaning equal changes in values produce equal perceived changes in color. Better for accessibility and smooth gradients.
                        </p>
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
    )
}
