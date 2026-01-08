import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function DataTable() {
  const columns = ["Subject", "Priority", "Status", "Category", "Created"];
  const rows = [
    {
      subject: "Login issue",
      priority: "High",
      status: "Open",
      category: "Auth",
      created: "2024-01-15",
    },
    {
      subject: "Data export failing",
      priority: "Medium",
      status: "In Progress",
      category: "Export",
      created: "2024-01-14",
    },
    {
      subject: "UI rendering bug",
      priority: "Low",
      status: "Resolved",
      category: "Frontend",
      created: "2024-01-13",
    },
  ];

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Open":
        return "default";
      case "In Progress":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="bg-primary/10 p-6 rounded-lg">
      <div className="overflow-x-auto">
        <Table className="bg-card rounded-lg overflow-hidden">
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col}>{col}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">{row.subject}</TableCell>
                <TableCell>
                  <Badge variant={getPriorityVariant(row.priority)}>
                    {row.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(row.status)}>
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {row.category}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {row.created}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
