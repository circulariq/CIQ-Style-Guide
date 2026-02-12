import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Folder, Terminal, FileCode } from "lucide-react"
import { DesignTokensSection } from "./DesignTokensSection"
import { DocumentationSection } from "./DocumentationSection"

export function DevContent() {
    return (
        <div className="space-y-6">
            {/* Quick Start */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        Quick Start
                    </CardTitle>
                    <CardDescription>Get the project running in 3 steps</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-muted p-4 rounded-md font-mono text-sm space-y-2">
                        <div><span className="text-muted-foreground"># 1. Navigate to design-system</span></div>
                        <div>cd design-system</div>
                        <div className="mt-2"><span className="text-muted-foreground"># 2. Install dependencies</span></div>
                        <div>npm install</div>
                        <div className="mt-2"><span className="text-muted-foreground"># 3. Start dev server</span></div>
                        <div>npm run dev</div>
                    </div>
                </CardContent>
            </Card>

            {/* Project Structure */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Folder className="h-5 w-5" />
                        Project Structure
                    </CardTitle>
                    <CardDescription>Key directories and their purpose</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3 font-mono text-sm">
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-tokens/tokens.json</strong>
                                <p className="text-muted-foreground text-xs">Source of truth for all design values</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-specs/interaction-rules.md</strong>
                                <p className="text-muted-foreground text-xs">Interaction patterns and state rules</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/src/components/ui/</strong>
                                <p className="text-muted-foreground text-xs">Reusable UI components (Button, Card, etc.)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/src/index.css</strong>
                                <p className="text-muted-foreground text-xs">Global styles + CSS variables</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/tailwind.config.ts</strong>
                                <p className="text-muted-foreground text-xs">Tailwind configuration</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-primary">📁</span>
                            <div>
                                <strong>/design-system/public/api/*.json</strong>
                                <p className="text-muted-foreground text-xs">Machine-readable API endpoints</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <DesignTokensSection />

            {/* Common Commands */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Terminal className="h-5 w-5" />
                        Common Commands
                    </CardTitle>
                    <CardDescription>Essential commands for development</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run dev</div>
                            <p className="text-xs text-muted-foreground">Start development server</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run build</div>
                            <p className="text-xs text-muted-foreground">Build for production</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npm run sync-tokens</div>
                            <p className="text-xs text-muted-foreground">Generate tokens.css from tokens.json</p>
                        </div>
                        <div className="bg-muted p-3 rounded-md">
                            <div className="font-mono text-sm mb-1">npx shadcn add [component-name]</div>
                            <p className="text-xs text-muted-foreground">Add new shadcn component</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Component Usage */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-5 w-5" />
                        Quick Component Reference
                    </CardTitle>
                    <CardDescription>Most commonly used components</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <h4 className="font-semibold mb-2">Button</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Button variant="default" size="md">Click</Button>`}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Variants: default, destructive, outline, secondary, ghost, link
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Card</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Input</h4>
                        <div className="bg-muted p-3 rounded-md font-mono text-xs">
                            {`<Input type="text" placeholder="Enter..." />`}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <DocumentationSection />

            {/* Troubleshooting */}
            <Card>
                <CardHeader>
                    <CardTitle>Troubleshooting</CardTitle>
                    <CardDescription>Common issues and solutions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <h4 className="font-semibold text-sm mb-1">Components have no padding/radius</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            CSS variables may not be loading. Check that <code className="bg-muted px-1 rounded">src/index.css</code> has
                            inlined token values in the <code className="bg-muted px-1 rounded">:root</code> block.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Token changes not reflecting</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Run <code className="bg-muted px-1 rounded">npm run sync-tokens</code> to regenerate CSS from
                            <code className="bg-muted px-1 rounded">tokens.json</code>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Component not found</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Add it with <code className="bg-muted px-1 rounded">npx shadcn add [component-name]</code>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-sm mb-1">Port 5174 already in use</h4>
                        <p className="text-xs text-muted-foreground mb-2">
                            Kill the process or use <code className="bg-muted px-1 rounded">npm run dev -- --port 3000</code>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
