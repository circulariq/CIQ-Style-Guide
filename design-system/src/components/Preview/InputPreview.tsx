import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputPreview() {
  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="default">Default Input</Label>
        <Input id="default" placeholder="Enter text..." />
      </div>
      <div className="space-y-2">
        <Label htmlFor="with-value">With Value</Label>
        <Input id="with-value" defaultValue="Sample text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="email@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter password" />
      </div>
    </div>
  );
}

