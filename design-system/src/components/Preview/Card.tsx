import {
  Card as ShadcnCard,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Card() {
  return (
    <ShadcnCard className="max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card subtitle</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This is the card content. It can contain any content you want.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </ShadcnCard>
  );
}
