import { Toggle } from "@/components/ui/toggle";

export function TogglePreview() {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Toggle aria-label="Toggle italic">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </Toggle>
        <Toggle aria-label="Toggle bold" defaultPressed>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h8a4 4 0 100-8H6v8zm0 0h8a4 4 0 110 8H6v-8z" />
          </svg>
        </Toggle>
        <Toggle aria-label="Toggle underline">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 19h16M9 3v12a4 4 0 108 0V3" />
          </svg>
        </Toggle>
      </div>
      
      <div className="flex gap-2">
        <Toggle variant="outline" aria-label="Toggle outline">
          Outline
        </Toggle>
        <Toggle aria-label="Toggle default">
          Default
        </Toggle>
      </div>
      
      <div className="flex gap-2">
        <Toggle size="sm" aria-label="Toggle small">
          Small
        </Toggle>
        <Toggle size="default" aria-label="Toggle default">
          Default
        </Toggle>
        <Toggle size="lg" aria-label="Toggle large">
          Large
        </Toggle>
      </div>
      
      <div className="flex gap-2">
        <Toggle disabled aria-label="Disabled toggle">
          Disabled
        </Toggle>
      </div>
    </div>
  );
}

