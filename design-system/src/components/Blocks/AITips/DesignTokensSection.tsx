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
                </div>
            </CardContent>
        </Card>
    )
}
