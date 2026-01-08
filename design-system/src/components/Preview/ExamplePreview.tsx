import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ExamplePreview() {
  return (
    <div className="space-y-6">
      {/* Example: User Profile Card */}
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>shadcn</CardTitle>
              <CardDescription>@shadcn</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Building beautiful, accessible components for the modern web.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Message</Button>
          <Button>Follow</Button>
        </CardFooter>
      </Card>

      {/* Example: Login Form */}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="example-email">Email</Label>
            <Input id="example-email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="example-password">Password</Label>
            <Input id="example-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Sign in</Button>
        </CardFooter>
      </Card>

      {/* Example: Stats */}
      <div className="grid grid-cols-3 gap-4 w-[350px]">
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-primary">2.5k</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-primary">1.2k</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-2xl font-bold text-primary">48</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

