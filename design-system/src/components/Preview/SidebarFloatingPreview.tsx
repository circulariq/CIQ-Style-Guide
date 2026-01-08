import { Button } from "@/components/ui/button";

export function SidebarFloatingPreview() {
  return (
    <div className="relative h-[400px] w-full max-w-3xl rounded-lg border overflow-hidden">
      {/* Main Content */}
      <div className="h-full p-6 bg-muted/20">
        <h2 className="text-2xl font-bold mb-2">Content Area</h2>
        <p className="text-muted-foreground mb-4">Floating sidebar overlays content.</p>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 rounded-lg bg-muted/50 flex items-center justify-center">
              Card {i}
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Sidebar */}
      <div className="absolute top-4 left-4 bottom-4 w-56 rounded-lg bg-background border shadow-lg p-4 flex flex-col">
        <div className="font-semibold mb-4">Menu</div>
        <nav className="space-y-1 flex-1">
          <Button variant="secondary" className="w-full justify-start" size="sm">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start" size="sm">
            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            Settings
          </Button>
        </nav>
      </div>
    </div>
  );
}

