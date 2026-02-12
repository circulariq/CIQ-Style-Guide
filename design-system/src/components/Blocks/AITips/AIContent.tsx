import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Code2, Bot, BookOpen, FileCode } from "lucide-react"
import { DesignTokensSection } from "./DesignTokensSection"
import { DocumentationSection } from "./DocumentationSection"
import aiPrompt from "../../../../../design-specs/ai-prompt.md?raw"
import aiContext from "../../../../../AI_CONTEXT.md?raw"
import interactionRules from "../../../../../design-specs/interaction-rules.md?raw"

export function AIContent() {
    return (
        <div className="space-y-6">
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

            {/* AI Agent Prompt */}
            <Card id="ai-agent-prompt">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        Access from AI Agents
                    </CardTitle>
                    <CardDescription>Example LLM prompt to initialize the design system context</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-md font-mono text-sm relative group">
                        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Badge variant="outline" className="bg-background">LLM Prompt</Badge>
                        </div>
                        <pre className="whitespace-pre-wrap break-all">
                            {aiPrompt}
                        </pre>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                            💡 <strong>Pro Tip:</strong> Copy this prompt into your conversation with an AI agent to ensure it follows the correct design system patterns.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* shadcn MCP Server */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5" />
                        shadcn MCP Server
                    </CardTitle>
                    <CardDescription>AI-powered component generation and management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        The shadcn MCP (Model Context Protocol) server enables AI assistants to interact with your shadcn/ui components programmatically.
                    </p>

                    <div>
                        <h4 className="font-semibold mb-2 text-sm">Installation</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            npx -y @modelcontextprotocol/create-server shadcn
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-sm">Available Commands</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                                <Badge variant="outline" className="mt-0.5">add</Badge>
                                <span className="text-muted-foreground">Add new components to your project</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Badge variant="outline" className="mt-0.5">list</Badge>
                                <span className="text-muted-foreground">List all available components</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <Badge variant="outline" className="mt-0.5">info</Badge>
                                <span className="text-muted-foreground">Get component information</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md">
                        <p className="text-xs text-blue-800 dark:text-blue-200">
                            <strong>💡 Pro Tip:</strong> Use the shadcn MCP server with AI assistants like Claude Desktop to add components via natural language commands.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-sm">Configuration</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Edit <code className="bg-muted px-1 rounded">components.json</code> to configure:
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                            <li>Style variant (default, new-york, etc.)</li>
                            <li>Base color palette</li>
                            <li>CSS variables</li>
                            <li>Component aliases</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-sm">Example Usage</h4>
                        <div className="bg-muted p-3 rounded-md space-y-2">
                            <div className="text-xs">
                                <div className="text-muted-foreground mb-1">User:</div>
                                <div className="font-mono">"Add a dialog component to my project"</div>
                            </div>
                            <div className="text-xs">
                                <div className="text-muted-foreground mb-1">AI + MCP:</div>
                                <div className="font-mono text-primary">npx shadcn add dialog</div>
                            </div>
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

            <DesignTokensSection />
            <DocumentationSection />

            {/* AI Context Full Reference */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        AI Context Full Reference
                    </CardTitle>
                    <CardDescription>Content of /AI_CONTEXT.md</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-md font-mono text-xs">
                        <pre className="whitespace-pre-wrap break-all">{aiContext}</pre>
                    </div>
                </CardContent>
            </Card>

            {/* Interaction Rules Full Reference */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Interaction Rules Full Reference
                    </CardTitle>
                    <CardDescription>Content of /design-specs/interaction-rules.md</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted p-4 rounded-md font-mono text-xs">
                        <pre className="whitespace-pre-wrap break-all">{interactionRules}</pre>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
