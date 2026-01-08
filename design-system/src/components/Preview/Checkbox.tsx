import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function Checkbox() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <ShadcnCheckbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          Accept terms and conditions
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <ShadcnCheckbox id="newsletter" defaultChecked />
        <Label htmlFor="newsletter" className="cursor-pointer">
          Subscribe to newsletter (checked)
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <ShadcnCheckbox id="disabled" disabled />
        <Label htmlFor="disabled" className="cursor-not-allowed opacity-50">
          Disabled checkbox
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <ShadcnCheckbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="cursor-not-allowed opacity-50">
          Disabled checked
        </Label>
      </div>
    </div>
  );
}
