import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"

export function CommonPatternsSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5" />
                    Common Patterns (Code Snippets)
                </CardTitle>
                <CardDescription>Reusable code blocks for consistent implementation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-sm font-semibold mb-2">Focus Ring Pattern</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-2">Disabled State Pattern</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            disabled:pointer-events-none disabled:opacity-50
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-2">Icon in Button Pattern</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Button className="flex items-center gap-2">
  <Plus className="h-4 w-4" />
  Add Item
</Button>`}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-2">Subtle Transition</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            transition-colors duration-200
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
