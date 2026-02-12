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

            {/* Version Information (Shared) */}
            <Card className="bg-muted/50">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between text-sm">
                        <div>
                            <strong>Design System Version:</strong> 1.0.0
                        </div>
                        <div className="text-muted-foreground">
                            Last Updated: 2026-02-12
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
