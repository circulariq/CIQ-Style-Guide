import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";

export function ElevenlabsBlock() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Voice Selection */}
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Voice Selection</CardTitle>
            <CardDescription>Choose a voice for text-to-speech</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Voice</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rachel">Rachel - Female, American</SelectItem>
                  <SelectItem value="adam">Adam - Male, American</SelectItem>
                  <SelectItem value="emily">Emily - Female, British</SelectItem>
                  <SelectItem value="james">James - Male, British</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Model</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multilingual-v2">Eleven Multilingual v2</SelectItem>
                  <SelectItem value="turbo-v2">Eleven Turbo v2</SelectItem>
                  <SelectItem value="english-v1">Eleven English v1</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Stability</Label>
                  <span className="text-sm text-muted-foreground">50%</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Clarity + Similarity</Label>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Slider defaultValue={[75]} max={100} step={1} />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Style Exaggeration</Label>
                  <span className="text-sm text-muted-foreground">0%</span>
                </div>
                <Slider defaultValue={[0]} max={100} step={1} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Text Input & Output */}
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Text to Speech</CardTitle>
            <CardDescription>Enter the text you want to convert to speech</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Input Text</Label>
              <Textarea 
                placeholder="Enter your text here..."
                className="min-h-[200px]"
                defaultValue="Welcome to the voice synthesis demo. This text will be converted to natural-sounding speech using advanced AI technology."
              />
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Generate Speech
              </Button>
              <Button variant="outline">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audio Player */}
        <Card>
          <CardHeader>
            <CardTitle>Audio Output</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <Button size="icon" variant="secondary">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </Button>
              <div className="flex-1">
                <div className="h-2 bg-primary/20 rounded-full">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
              </div>
              <span className="text-sm text-muted-foreground">0:12 / 0:35</span>
              <Button size="icon" variant="ghost">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Generations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { text: "Welcome to the voice synthesis demo...", voice: "Rachel", time: "2 min ago" },
                { text: "This is a test of the speech system...", voice: "Adam", time: "15 min ago" },
                { text: "Hello, how can I help you today?", voice: "Emily", time: "1 hour ago" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </Button>
                    <div>
                      <p className="text-sm font-medium truncate max-w-[300px]">{item.text}</p>
                      <p className="text-xs text-muted-foreground">{item.voice} • {item.time}</p>
                    </div>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

