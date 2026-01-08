import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ChartPreview() {
  // Simple chart visualization without recharts dependency
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 800 },
    { name: "May", value: 500 },
    { name: "Jun", value: 900 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Monthly Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 h-[200px]">
          {data.map((item) => (
            <div key={item.name} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-primary rounded-t-sm transition-all"
                style={{ height: `${(item.value / maxValue) * 160}px` }}
              />
              <span className="text-xs text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

