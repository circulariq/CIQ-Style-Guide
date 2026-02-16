import { useNavigate, useParams } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bot, Code2 } from "lucide-react"
import { AIContent } from "./AITips/AIContent"
import { DevContent } from "./AITips/DevContent"

export function AITipsBlock() {
    const { subpage } = useParams<{ subpage: string }>()
    const navigate = useNavigate()
    const activeTab = subpage || "ai"

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold mb-2">AI Tips & Developer Guide</h1>
                <p className="text-muted-foreground">
                    Everything an AI agent or developer needs to run and maintain this design system
                </p>
            </div>

            <Tabs
                value={activeTab}
                onValueChange={(value) => navigate(`/ai-tips/${value}`)}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                    <TabsTrigger value="ai" className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        AI Agent Guide
                    </TabsTrigger>
                    <TabsTrigger value="devs" className="flex items-center gap-2">
                        <Code2 className="h-4 w-4" />
                        Developer Guide
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="ai" className="mt-6">
                    <AIContent />
                </TabsContent>

                <TabsContent value="devs" className="mt-6">
                    <DevContent />
                </TabsContent>
            </Tabs>

            {/* 12. Version Information & Quick Links (Shared) */}
            <Card className="bg-muted/50 border-dashed">
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                            <div className="font-semibold flex items-center gap-2">
                                <Bot className="h-4 w-4 text-primary" />
                                System Info
                            </div>
                            <div className="text-muted-foreground">
                                <strong>Version:</strong> 1.0.0
                            </div>
                            <div className="text-muted-foreground">
                                <strong>Last Updated:</strong> 2026-02-14
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold flex items-center gap-2">
                                <Code2 className="h-4 w-4 text-primary" />
                                Quick Links
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                <code className="text-xs">/AI_CONTEXT.md</code>
                                <code className="text-xs">/design-tokens/tokens.json</code>
                                <code className="text-xs">/design-specs/interaction-rules.md</code>
                                <code className="text-xs">/API_DOCUMENTATION.md</code>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
