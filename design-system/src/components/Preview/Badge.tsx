import { Badge as ShadcnBadge } from "@/components/ui/badge";

export function Badge() {
  return (
    <div className="flex flex-wrap gap-2">
      <ShadcnBadge>Primary</ShadcnBadge>
      <ShadcnBadge variant="secondary">Secondary</ShadcnBadge>
      <ShadcnBadge variant="outline">Outline</ShadcnBadge>
      <ShadcnBadge variant="destructive">Destructive</ShadcnBadge>
      <ShadcnBadge className="bg-green-500 hover:bg-green-600">Success</ShadcnBadge>
      <ShadcnBadge className="bg-yellow-500 hover:bg-yellow-600">Warning</ShadcnBadge>
    </div>
  );
}
