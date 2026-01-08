import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaPreview() {
  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="message">Your message</Label>
        <Textarea placeholder="Type your message here." id="message" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="with-value">With content</Label>
        <Textarea id="with-value" defaultValue="This is a sample message that demonstrates how text appears in a textarea component." />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="disabled">Disabled</Label>
        <Textarea placeholder="Disabled textarea" id="disabled" disabled />
      </div>
    </div>
  );
}

