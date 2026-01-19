import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";

export function NativeSelectPreview() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="default-select">Default Select</Label>
        <div className="relative">
          <select
            id="default-select"
            className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pr-8"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="selected">With Selected Value</Label>
        <div className="relative">
          <select
            id="selected"
            defaultValue="2"
            className="flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 pr-8"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-select">Disabled</Label>
        <div className="relative">
          <select
            id="disabled-select"
            disabled
            className="flex h-10 w-full appearance-none rounded-md border border-input bg-muted px-3 py-2 text-sm opacity-50 cursor-not-allowed pr-8"
          >
            <option value="">Select an option</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

