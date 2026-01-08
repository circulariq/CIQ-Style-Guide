import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CreateTicketButton() {
  return (
    <div className="space-y-4">
      {/* Desktop/Tablet variant */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Desktop / Tablet</p>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Mobile variant (full width) */}
      <div>
        <p className="text-sm text-muted-foreground mb-2">Mobile (full width)</p>
        <Button className="w-full">
          <Plus className="w-5 h-5 mr-2" />
          Create Ticket
        </Button>
      </div>
    </div>
  );
}
