import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

export function OKLCHSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    OKLCH Explanation
                </CardTitle>
                <CardDescription>Why we use the OKLCH color space for themes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                        <div className="w-10 h-10 rounded border border-gray-600" style={{ backgroundColor: '#111827' }}></div>
                        <div className="text-sm text-white">
                            <div className="font-mono font-semibold">Dark Background</div>
                            <div className="text-xs text-gray-300">oklch(0.13 0.028 261.692)</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-md" style={{ backgroundColor: '#111827' }}>
                        <div className="w-10 h-10 rounded border" style={{ backgroundColor: '#047857' }}></div>
                        <div className="text-sm text-white">
                            <div className="font-mono font-semibold">Dark Primary</div>
                            <div className="text-xs text-gray-300">oklch(0.50 0.12 164)</div>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Why OKLCH?</strong> OKLCH provides perceptually uniform colors, meaning equal changes in values produce equal perceived changes in color.
                    </p>
                    <ul className="mt-2 text-xs text-blue-700 dark:text-blue-300 space-y-1 list-disc list-inside">
                        <li><strong>Accessibility:</strong> Easier to maintain contrast ratios across themes.</li>
                        <li><strong>Gradients:</strong> Smoother, more natural transitions between colors.</li>
                        <li><strong>Uniformity:</strong> Consistent lightness perception across different hues.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}
