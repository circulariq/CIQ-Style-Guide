import { StatCard } from "./StatCard";

export function StatCards() {
  const stats = [
    { title: "Open Tickets", value: 0 },
    { title: "In Progress", value: 0 },
    { title: "At Risk Customers", value: 0 },
  ];

  return (
    <div className="bg-primary/10 p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </div>
    </div>
  );
}
