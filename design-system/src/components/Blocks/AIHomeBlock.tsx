import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, BookOpen, ShieldCheck, Zap, Info } from "lucide-react"
import aiContext from "../../../../AI_CONTEXT.md?raw"

export function AIHomeBlock() {
    return (
        <div className="space-y-8 max-w-5xl">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-xl bg-primary/10 border border-primary/20 p-8">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-primary/20 p-2 rounded-lg">
                            <Bot className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="bg-primary/20 hover:bg-primary/30 text-primary border-none">AI Optimized</Badge>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">AI Home & Style Guide</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        This design system is built to be deterministic and fully machine-readable.
                        AI agents should use this page as their primary source of truth.
                    </p>
                </div>
                {/* Subtle Background Pattern */}
                <div className="absolute right-[-5%] top-[-10%] opacity-10">
                    <Bot size={300} strokeWidth={0.5} />
                </div>
            </div>

            {/* Quick Fetch API for AI Agents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-muted/30 border-dashed">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-emerald-500" />
                            Machine Readable (Raw)
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <code className="text-[10px] bg-background p-2 rounded border truncate select-all hover:border-primary transition-colors">
                                GET https://ciq-style-guide.vercel.app/ai-context.txt
                            </code>
                            <p className="text-[10px] text-muted-foreground italic">Fastest way for AI to ingest all rules</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30 border-dashed">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold flex items-center gap-2">
                            <Zap className="h-4 w-4 text-amber-500" />
                            Design Tokens
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <code className="text-[10px] bg-background p-2 rounded border truncate select-all hover:border-primary transition-colors">
                                GET https://ciq-style-guide.vercel.app/design-tokens/tokens.json
                            </code>
                            <p className="text-[10px] text-muted-foreground italic">Source of truth for all CSS values</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Rules Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="relative group overflow-hidden border-green-500/50 bg-green-50/5 dark:bg-green-500/5">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-green-600 dark:text-green-400">
                            <ShieldCheck className="h-5 w-5" />
                            Always Do
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>• Use token names only</p>
                        <p>• Focus-visible states</p>
                        <p>• Disabled states</p>
                        <p>• Transition-colors</p>
                    </CardContent>
                </Card>

                <Card className="relative group overflow-hidden border-red-500/50 bg-red-50/5 dark:bg-red-500/5">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-red-600 dark:text-red-400">
                            <Zap className="h-5 w-5" />
                            Never Do
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>• Invent new colors</p>
                        <p>• Arbitrary spacing</p>
                        <p>• Transition-all</p>
                        <p>• Focus (non-visible)</p>
                    </CardContent>
                </Card>

                <Card className="relative group overflow-hidden border-primary/50 bg-primary/5">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2 text-primary">
                            <BookOpen className="h-5 w-5" />
                            Getting Started
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-2">
                        <p>1. Fetch AI Context Guide</p>
                        <p>2. Fetch Design Tokens</p>
                        <p>3. Visit Component Pages</p>
                        <p>4. Implementation</p>
                    </CardContent>
                </Card>
            </div>

            {/* Available Components Section (v01 additions) */}
            <Card className="border-border bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-amber-500" />
                        Available Components
                    </CardTitle>
                    <CardDescription>Directly accessible via <code className="bg-muted px-1 rounded">/components/{"{name}"}</code></CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                        <div className="space-y-1.5 p-3 rounded-md bg-muted/30">
                            <div className="font-semibold text-foreground flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                Layout & Data
                            </div>
                            <p className="text-muted-foreground leading-relaxed">Accordion, Aspect Ratio, Breadcrumb, Card, Carousel, Collapsible, Resizable, Scroll Area, Separator, Tabs, Avatar, Badge, Progress, Skeleton, Table</p>
                        </div>
                        <div className="space-y-1.5 p-3 rounded-md bg-muted/30">
                            <div className="font-semibold text-foreground flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Form & Actions
                            </div>
                            <p className="text-muted-foreground leading-relaxed">Button, Toggle, Toggle Group, Calendar, Checkbox, Form, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea</p>
                        </div>
                        <div className="space-y-1.5 p-3 rounded-md bg-muted/30">
                            <div className="font-semibold text-foreground flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                Overlays & Nav
                            </div>
                            <p className="text-muted-foreground leading-relaxed">Alert, Alert Dialog, Dialog, Drawer, Hover Card, Popover, Sheet, Sonner, Tooltip, Command, Context Menu, Dropdown, Menubar, Navigation, Pagination</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Raw Context for AI / Human Reference */}
            <Card className="border-border">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            AI Context Source
                        </CardTitle>
                        <CardDescription>Formatted for machine parsing (LLM ingestion)</CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="relative group">
                        <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Badge variant="outline" className="bg-background">Raw Markdown</Badge>
                        </div>
                        <div className="bg-zinc-950 text-zinc-300 p-6 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto border border-zinc-800 shadow-2xl">
                            <pre className="whitespace-pre-wrap">{aiContext}</pre>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer Reminder */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground justify-center py-8">
                <Info className="h-3 w-3" />
                <span>Last updated Feb 2026 • Deterministic Design System v1.0.0</span>
            </div>
        </div>
    )
}
