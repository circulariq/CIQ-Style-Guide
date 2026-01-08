import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function InputGroupPreview() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
          https://
        </span>
        <Input className="rounded-l-none" placeholder="example.com" />
      </div>
      
      <div className="flex">
        <Input className="rounded-r-none" placeholder="Search..." />
        <Button className="rounded-l-none">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
      </div>
      
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
          $
        </span>
        <Input className="rounded-none" placeholder="0.00" type="number" />
        <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-l-0 border-input rounded-r-md">
          USD
        </span>
      </div>
    </div>
  );
}

