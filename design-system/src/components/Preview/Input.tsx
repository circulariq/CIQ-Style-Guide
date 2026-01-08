import { Input as ShadcnInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Input() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="default">Default Input</Label>
        <ShadcnInput id="default" type="text" placeholder="Enter text..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="with-value">With Value</Label>
        <ShadcnInput id="with-value" type="text" defaultValue="Sample text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <ShadcnInput id="disabled" type="text" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <ShadcnInput id="email" type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <ShadcnInput id="password" type="password" placeholder="Enter password" />
      </div>
    </div>
  );
}
