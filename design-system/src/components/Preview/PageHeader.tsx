import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function PageHeader() {
  return (
    <div className="bg-primary/10 p-6 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Support</h1>
          <p className="text-muted-foreground mt-1">
            Ticket management and customer health monitoring
          </p>
        </div>
        <Button className="w-full sm:w-auto">
          <Plus className="w-5 h-5 mr-2" />
          Create Ticket
        </Button>
      </div>
    </div>
  );
}
