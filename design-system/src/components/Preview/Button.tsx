import { Button as ShadcnButton } from "@/components/ui/button";

export function Button() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <ShadcnButton variant="default">Primary</ShadcnButton>
        <ShadcnButton variant="secondary">Secondary</ShadcnButton>
        <ShadcnButton variant="outline">Outline</ShadcnButton>
        <ShadcnButton variant="ghost">Ghost</ShadcnButton>
        <ShadcnButton variant="link">Link</ShadcnButton>
        <ShadcnButton variant="destructive">Destructive</ShadcnButton>
      </div>
      <div className="flex flex-wrap gap-4">
        <ShadcnButton size="sm">Small</ShadcnButton>
        <ShadcnButton size="default">Default</ShadcnButton>
        <ShadcnButton size="lg">Large</ShadcnButton>
        <ShadcnButton size="icon">🎯</ShadcnButton>
      </div>
      <div className="flex flex-wrap gap-4">
        <ShadcnButton disabled variant="default">Disabled Primary</ShadcnButton>
        <ShadcnButton disabled variant="secondary">Disabled Secondary</ShadcnButton>
        <ShadcnButton disabled variant="outline">Disabled Outline</ShadcnButton>
      </div>
    </div>
  );
}
