import { Slider } from "@/components/ui/slider";

export function SliderPreview() {
  return (
    <div className="space-y-8 w-full max-w-md">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Range</p>
        <Slider defaultValue={[25, 75]} max={100} step={1} />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">With Steps (10)</p>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Disabled</p>
        <Slider defaultValue={[50]} max={100} step={1} disabled />
      </div>
    </div>
  );
}

