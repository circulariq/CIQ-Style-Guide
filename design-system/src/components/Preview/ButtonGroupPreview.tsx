import { Button } from "@/components/ui/button";

export function ButtonGroupPreview() {
  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Button variant="outline" className="rounded-r-none">Left</Button>
        <Button variant="outline" className="rounded-none border-x-0">Middle</Button>
        <Button variant="outline" className="rounded-l-none">Right</Button>
      </div>
      
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Button className="rounded-r-none">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Button>
        <Button className="rounded-none border-x-0">1 of 10</Button>
        <Button className="rounded-l-none">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
}

