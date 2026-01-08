import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatGPTBlock() {
  const [messages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm an AI assistant. How can I help you today?"
    },
    {
      role: "user", 
      content: "Can you explain what shadcn/ui is?"
    },
    {
      role: "assistant",
      content: "shadcn/ui is a collection of beautifully designed, accessible, and customizable React components. Unlike traditional component libraries, shadcn/ui provides the actual source code for each component, which you can copy and paste into your project.\n\nKey features include:\n\n• **Open Source**: All components are free and open source\n• **Customizable**: You own the code and can modify it as needed\n• **Accessible**: Built with Radix UI primitives for accessibility\n• **Styled with Tailwind CSS**: Uses Tailwind for styling\n• **Dark mode**: Built-in dark mode support\n\nWould you like me to explain any specific component?"
    },
    {
      role: "user",
      content: "How do I install it?"
    },
    {
      role: "assistant", 
      content: "To install shadcn/ui in your project, follow these steps:\n\n**1. Initialize your project**\n```bash\nnpx shadcn-ui@latest init\n```\n\n**2. Add components**\n```bash\nnpx shadcn-ui@latest add button\nnpx shadcn-ui@latest add card\n```\n\nOr add all components at once:\n```bash\nnpx shadcn-ui@latest add --all\n```\n\n**3. Import and use**\n```tsx\nimport { Button } from \"@/components/ui/button\"\n\nexport default function Home() {\n  return <Button>Click me</Button>\n}\n```\n\nThat's it! The components will be added to your project's components directory."
    }
  ]);

  return (
    <div className="flex h-[600px] flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <svg className="h-5 w-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"/>
            </svg>
          </div>
          <span className="font-semibold">ChatGPT</span>
        </div>
        <Button variant="ghost" size="icon">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6">
          {messages.map((message, i) => (
            <div key={i} className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
              {message.role === 'assistant' && (
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">AI</AvatarFallback>
                </Avatar>
              )}
              <Card className={`max-w-[80%] ${message.role === 'user' ? 'bg-primary text-primary-foreground' : ''}`}>
                <CardContent className="p-3">
                  <div className={`text-sm whitespace-pre-wrap ${message.role === 'user' ? '' : 'prose prose-sm max-w-none'}`}>
                    {message.content.split('\n').map((line, j) => {
                      if (line.startsWith('```')) {
                        return null;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <p key={j} className="font-semibold mt-2">{line.replace(/\*\*/g, '')}</p>;
                      }
                      if (line.startsWith('• ')) {
                        return <p key={j} className="ml-4">{line}</p>;
                      }
                      return <p key={j}>{line}</p>;
                    })}
                  </div>
                </CardContent>
              </Card>
              {message.role === 'user' && (
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarFallback className="bg-muted text-xs">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t p-4">
        <div className="relative">
          <Input
            placeholder="Send a message..."
            className="pr-12"
          />
          <Button 
            size="icon" 
            className="absolute right-1 top-1 h-8 w-8"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </div>
        <p className="mt-2 text-xs text-center text-muted-foreground">
          ChatGPT can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}

