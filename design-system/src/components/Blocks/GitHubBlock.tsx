import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GitHubBlock() {
  return (
    <div className="space-y-6">
      {/* Repository Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              <span className="text-lg font-semibold">shadcn / ui</span>
              <Badge variant="outline">Public</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Star
              </Button>
              <Button variant="outline" size="sm">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Fork
              </Button>
            </div>
          </div>
          <CardDescription className="mt-2">
            Beautifully designed components that you can copy and paste into your apps. 
            Accessible. Customizable. Open Source.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              TypeScript
            </span>
            <span>⭐ 52.4k</span>
            <span>🍴 2.8k</span>
            <span>MIT License</span>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="code" className="w-full">
        <TabsList>
          <TabsTrigger value="code">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Code
          </TabsTrigger>
          <TabsTrigger value="issues">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2} />
            </svg>
            Issues
            <Badge variant="secondary" className="ml-2">234</Badge>
          </TabsTrigger>
          <TabsTrigger value="pulls">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Pull requests
            <Badge variant="secondary" className="ml-2">45</Badge>
          </TabsTrigger>
          <TabsTrigger value="actions">Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="code" className="space-y-4">
          {/* Branch selector and actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                main
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
              <span className="text-sm text-muted-foreground">142 branches</span>
              <span className="text-sm text-muted-foreground">98 tags</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Go to file</Button>
              <Button variant="outline" size="sm">Add file</Button>
              <Button size="sm">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Code
              </Button>
            </div>
          </div>

          {/* File list */}
          <Card>
            <CardContent className="p-0">
              <div className="border-b p-3 bg-muted/50">
                <div className="flex items-center gap-2 text-sm">
                  <img src="https://github.com/shadcn.png" alt="shadcn" className="h-6 w-6 rounded-full" />
                  <span className="font-medium">shadcn</span>
                  <span className="text-muted-foreground">feat: add new components</span>
                  <span className="text-muted-foreground ml-auto">2 days ago</span>
                </div>
              </div>
              <div className="divide-y">
                {[
                  { name: ".github", type: "folder", commit: "ci: update workflows", time: "3 days ago" },
                  { name: "apps", type: "folder", commit: "feat: add new examples", time: "2 days ago" },
                  { name: "packages", type: "folder", commit: "feat: add new components", time: "2 days ago" },
                  { name: ".gitignore", type: "file", commit: "chore: update gitignore", time: "1 week ago" },
                  { name: "package.json", type: "file", commit: "chore: bump dependencies", time: "3 days ago" },
                  { name: "README.md", type: "file", commit: "docs: update readme", time: "5 days ago" },
                  { name: "tsconfig.json", type: "file", commit: "chore: update tsconfig", time: "2 weeks ago" },
                ].map((file, i) => (
                  <div key={i} className="flex items-center px-3 py-2 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-center gap-2 w-1/3">
                      {file.type === "folder" ? (
                        <svg className="h-4 w-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      <span className="text-sm hover:text-primary hover:underline">{file.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground w-1/3 truncate">{file.commit}</span>
                    <span className="text-sm text-muted-foreground w-1/3 text-right">{file.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* README */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 border-b">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <CardTitle className="text-base">README.md</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none pt-4">
              <h1 className="text-2xl font-bold">shadcn/ui</h1>
              <p className="text-muted-foreground">
                Beautifully designed components built with Radix UI and Tailwind CSS.
              </p>
              <h2 className="text-lg font-semibold mt-4">Documentation</h2>
              <p className="text-muted-foreground">
                Visit <a href="#" className="text-primary hover:underline">ui.shadcn.com</a> to view the full documentation.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">Issues content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pulls">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">Pull requests content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="actions">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">Actions content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

