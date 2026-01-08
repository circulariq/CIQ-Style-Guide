import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function VercelBlock() {
  return (
    <div className="space-y-6">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 22.525H0l12-21.05 12 21.05z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-semibold">design-system</h1>
            <p className="text-sm text-muted-foreground">Production</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Settings</Button>
          <Button>Visit</Button>
        </div>
      </div>

      {/* Deployment Status */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium">Ready</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Domains</CardDescription>
          </CardHeader>
          <CardContent>
            <span className="font-medium text-primary hover:underline cursor-pointer">
              design-system.vercel.app
            </span>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Branch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="font-medium">main</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deployments List */}
      <Card>
        <CardHeader>
          <CardTitle>Deployments</CardTitle>
          <CardDescription>Recent deployment history</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {[
              { 
                commit: "feat: add new components", 
                branch: "main", 
                status: "ready", 
                time: "2m ago",
                duration: "45s",
                author: "shadcn"
              },
              { 
                commit: "fix: button styles", 
                branch: "main", 
                status: "ready", 
                time: "1h ago",
                duration: "38s",
                author: "shadcn"
              },
              { 
                commit: "chore: update deps", 
                branch: "main", 
                status: "ready", 
                time: "3h ago",
                duration: "42s",
                author: "shadcn"
              },
              { 
                commit: "feat: dark mode", 
                branch: "feature/dark", 
                status: "building", 
                time: "5m ago",
                duration: "-",
                author: "shadcn"
              },
              { 
                commit: "test: failing tests", 
                branch: "test/ci", 
                status: "error", 
                time: "2h ago",
                duration: "12s",
                author: "contributor"
              },
            ].map((deploy, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className={`h-2 w-2 rounded-full ${
                    deploy.status === 'ready' ? 'bg-green-500' : 
                    deploy.status === 'building' ? 'bg-yellow-500 animate-pulse' : 
                    'bg-red-500'
                  }`} />
                  <div>
                    <p className="font-medium text-sm">{deploy.commit}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span>{deploy.branch}</span>
                      <span>•</span>
                      <span>{deploy.author}</span>
                      <span>•</span>
                      <span>{deploy.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant={
                    deploy.status === 'ready' ? 'default' : 
                    deploy.status === 'building' ? 'secondary' : 
                    'destructive'
                  }>
                    {deploy.status === 'ready' ? 'Ready' : 
                     deploy.status === 'building' ? 'Building...' : 
                     'Error'}
                  </Badge>
                  <span className="text-sm text-muted-foreground w-12 text-right">{deploy.duration}</span>
                  <Button variant="ghost" size="sm">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
            <CardDescription>Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Page Views</span>
                <span className="font-medium">12,543</span>
              </div>
              <Progress value={75} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Unique Visitors</span>
                <span className="font-medium">4,231</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Bandwidth</span>
                <span className="font-medium">2.4 GB</span>
              </div>
              <Progress value={30} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Functions</CardTitle>
            <CardDescription>Serverless function invocations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>/api/auth</span>
                <span className="font-medium">3,421 calls</span>
              </div>
              <Progress value={85} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>/api/data</span>
                <span className="font-medium">1,892 calls</span>
              </div>
              <Progress value={55} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>/api/webhook</span>
                <span className="font-medium">456 calls</span>
              </div>
              <Progress value={15} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

