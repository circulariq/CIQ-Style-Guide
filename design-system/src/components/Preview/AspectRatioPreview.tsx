import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioPreview() {
  return (
    <div className="space-y-4">
      <div className="w-[450px]">
        <p className="text-sm text-muted-foreground mb-2">16:9 Aspect Ratio</p>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-primary/40">
            <span className="text-muted-foreground">16:9</span>
          </div>
        </AspectRatio>
      </div>
      <div className="w-[200px]">
        <p className="text-sm text-muted-foreground mb-2">1:1 Aspect Ratio</p>
        <AspectRatio ratio={1} className="bg-muted rounded-md overflow-hidden">
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-primary/40">
            <span className="text-muted-foreground">1:1</span>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
}

