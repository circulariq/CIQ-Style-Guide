import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export function HomeBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Card Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Card</h3>
        <Card className="overflow-hidden">
          <div className="h-48 bg-gradient-to-br from-primary/40 to-primary/60" />
          <CardHeader>
            <CardTitle>Observability Plus is replacing Monitoring</CardTitle>
            <CardDescription>
              Switch to the improved way to explore your data, with natural language. 
              Monitoring will no longer be available on the Pro plan in November, 2025
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button>
              Create Query
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
            <Badge variant="outline">Warning</Badge>
          </CardFooter>
        </Card>
      </div>

      {/* Form Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Form</h3>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>User Information</CardTitle>
                <CardDescription>Please fill in your details below</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a framework" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Comments</Label>
              <Textarea placeholder="Add any additional comments" />
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button>Submit</Button>
            <Button variant="outline">Cancel</Button>
          </CardFooter>
        </Card>
      </div>

      {/* Complex Form Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Complex Form</h3>
        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Payment Method</CardTitle>
            <CardDescription className="text-primary-foreground/70">
              All transactions are secure and encrypted.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-primary-foreground">Card Number</Label>
                <Input placeholder="1234 5678 9012 3456" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              </div>
              <div className="space-y-2">
                <Label className="text-primary-foreground">Expiry Date</Label>
                <Input placeholder="MM/YY" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-primary-foreground">Cardholder Name</Label>
              <Input placeholder="John Doe" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fields Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Fields</h3>
        <Card>
          <CardHeader>
            <CardTitle>Compute Environment</CardTitle>
            <CardDescription>
              Select the compute environment for your cluster.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Environment</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Instance Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select instance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (2 vCPU, 4GB RAM)</SelectItem>
                  <SelectItem value="medium">Medium (4 vCPU, 8GB RAM)</SelectItem>
                  <SelectItem value="large">Large (8 vCPU, 16GB RAM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

