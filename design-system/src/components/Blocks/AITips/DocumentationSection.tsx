import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package } from "lucide-react"

export function DocumentationSection() {
    return (
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
    )
}
