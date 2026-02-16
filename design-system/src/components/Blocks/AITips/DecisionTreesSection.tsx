import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, ArrowRight } from "lucide-react"

export function DecisionTreesSection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Quick Decision Trees
                </CardTitle>
                <CardDescription>Instant answers to common implementation questions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg border">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            What color should I use?
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-20 text-muted-foreground font-medium">Brand:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-primary/20 text-primary-foreground px-1.5 rounded">primary</code>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-20 text-muted-foreground font-medium">Text:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-muted px-1.5 rounded">foreground</code>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-20 text-muted-foreground font-medium">Action:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-primary/20 text-primary-foreground px-1.5 rounded">primary</code>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-20 text-muted-foreground font-medium">Error:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-destructive/20 text-destructive px-1.5 rounded">destructive</code>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-20 text-muted-foreground font-medium">Help/Subtle:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-muted px-1.5 rounded">muted-foreground</code>
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-muted rounded-lg border">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            What radius should I use?
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-24 text-muted-foreground font-medium">Components:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-muted px-1.5 rounded">rounded-sm</code> (4px)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-24 text-muted-foreground font-medium">Cards/Blocks:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-muted px-1.5 rounded">rounded-md</code> (8px)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-24 text-muted-foreground font-medium">Overlays:</span>
                                <ArrowRight className="h-3 w-3" />
                                <code className="bg-muted px-1.5 rounded">rounded-lg</code> (12px)
                            </li>
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
