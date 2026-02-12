import { useState } from "react";
import { cn } from "@/lib/utils";

interface ItemProps {
  title: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
}

function Item({ title, description, selected, onClick }: ItemProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
        selected
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50 hover:bg-muted/50"
      )}
    >
      <div className={cn(
        "h-4 w-4 rounded-full border-2 flex items-center justify-center",
        selected ? "border-primary" : "border-muted-foreground"
      )}>
        {selected && <div className="h-2 w-2 rounded-full bg-primary" />}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </div>
  );
}

export function ItemPreview() {
  const [selectedId, setSelectedId] = useState<string>("opt1");

  return (
    <div className="space-y-2 w-full max-w-sm">
      <Item
        title="Option One"
        description="This is the first option"
        selected={selectedId === "opt1"}
        onClick={() => setSelectedId("opt1")}
      />
      <Item
        title="Option Two"
        description="This is the second option"
        selected={selectedId === "opt2"}
        onClick={() => setSelectedId("opt2")}
      />
      <Item
        title="Option Three"
        description="This is the third option"
        selected={selectedId === "opt3"}
        onClick={() => setSelectedId("opt3")}
      />
    </div>
  );
}

