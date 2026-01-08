import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function FieldPreview() {
  return (
    <div className="space-y-6 w-full max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="name@example.com" />
        <p className="text-sm text-muted-foreground">Enter your email address.</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
        <p className="text-sm text-muted-foreground">Must be at least 8 characters.</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="error-field" className="text-destructive">Username</Label>
        <Input id="error-field" className="border-destructive" defaultValue="john" />
        <p className="text-sm text-destructive">Username is already taken.</p>
      </div>
    </div>
  );
}

