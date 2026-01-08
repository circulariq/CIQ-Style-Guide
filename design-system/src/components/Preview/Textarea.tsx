import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Textarea() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="default-textarea">Default Textarea</Label>
        <ShadcnTextarea
          id="default-textarea"
          placeholder="Enter your message..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="with-content">With Content</Label>
        <ShadcnTextarea
          id="with-content"
          defaultValue="This is a sample message that demonstrates how text appears in a textarea component."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-textarea">Disabled</Label>
        <ShadcnTextarea
          id="disabled-textarea"
          placeholder="Disabled textarea"
          disabled
          rows={4}
        />
      </div>
    </div>
  );
}
