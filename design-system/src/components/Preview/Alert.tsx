import {
  Alert as ShadcnAlert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert";
import { Info, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export function Alert() {
  return (
    <div className="space-y-4">
      <ShadcnAlert>
        <Info className="h-4 w-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          This is an informational alert message.
        </AlertDescription>
      </ShadcnAlert>

      <ShadcnAlert className="border-green-500/50 text-green-600 [&>svg]:text-green-600">
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your action was completed successfully.
        </AlertDescription>
      </ShadcnAlert>

      <ShadcnAlert className="border-yellow-500/50 text-yellow-600 [&>svg]:text-yellow-600">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review this information before proceeding.
        </AlertDescription>
      </ShadcnAlert>

      <ShadcnAlert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again.
        </AlertDescription>
      </ShadcnAlert>
    </div>
  );
}
