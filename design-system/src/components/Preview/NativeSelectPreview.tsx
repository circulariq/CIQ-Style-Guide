import { Label } from "@/components/ui/label";

export function NativeSelectPreview() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="default-select">Default Select</Label>
        <select
          id="default-select"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="selected">With Selected Value</Label>
        <select
          id="selected"
          defaultValue="2"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="disabled-select">Disabled</Label>
        <select
          id="disabled-select"
          disabled
          className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed"
        >
          <option value="">Select an option</option>
        </select>
      </div>
    </div>
  );
}

