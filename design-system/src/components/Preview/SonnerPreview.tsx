import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function SonnerPreview() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Success! Your changes have been saved.")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Error! Something went wrong.")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Warning! Please check your input.")}
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Info: This is an informational message.")}
      >
        Info
      </Button>
    </div>
  );
}

