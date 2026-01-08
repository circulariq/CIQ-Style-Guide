import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: number | string;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <p className="text-primary font-medium mb-4">{title}</p>
        <p className="text-4xl font-bold text-foreground">{value}</p>
      </CardContent>
    </Card>
  );
}
