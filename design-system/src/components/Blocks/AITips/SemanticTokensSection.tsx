import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Type } from "lucide-react"

export function SemanticTokensSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Type className="h-5 w-5" />
                    Semantic Color Tokens
                </CardTitle>
                <CardDescription>Abstract mappings from names to raw color values</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
        </Card>
    )
}
