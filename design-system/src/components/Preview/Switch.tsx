import { Switch as ShadcnSwitch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function Switch() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="notifications" className="cursor-pointer">
          Enable notifications
        </Label>
        <ShadcnSwitch id="notifications" />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="dark-mode" className="cursor-pointer">
          Dark mode (on)
        </Label>
        <ShadcnSwitch id="dark-mode" defaultChecked />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="disabled-switch" className="opacity-50 cursor-not-allowed">
          Disabled switch
        </Label>
        <ShadcnSwitch id="disabled-switch" disabled />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="disabled-checked" className="opacity-50 cursor-not-allowed">
          Disabled checked
        </Label>
        <ShadcnSwitch id="disabled-checked" disabled defaultChecked />
      </div>
    </div>
  );
}
