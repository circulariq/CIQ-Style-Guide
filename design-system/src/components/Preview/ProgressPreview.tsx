import { Progress } from "@/components/ui/progress";

export function ProgressPreview() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Default (60%)</p>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Complete (100%)</p>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Starting (20%)</p>
        <Progress value={20} />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Empty (0%)</p>
        <Progress value={0} />
      </div>
    </div>
  );
}

