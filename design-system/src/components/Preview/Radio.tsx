import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function Radio() {
  return (
    <RadioGroup defaultValue="option2" className="space-y-3">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1" className="cursor-pointer">
          Option 1
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2" className="cursor-pointer">
          Option 2 (selected)
        </Label>
      </div>

      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" disabled />
        <Label htmlFor="option3" className="cursor-not-allowed opacity-50">
          Option 3 (disabled)
        </Label>
      </div>
    </RadioGroup>
  );
}
