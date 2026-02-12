import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { componentsData } from '../data/components';
import { blocksData } from '../data/blocks';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ModeToggle } from './mode-toggle';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export type ViewType = 'block' | 'component';

interface SidebarProps { }

export function Sidebar({ }: SidebarProps) {
  const [blocksOpen, setBlocksOpen] = useState(true);
  const [componentsOpen, setComponentsOpen] = useState(true);

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col h-full">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold text-foreground">Design System</h1>
          <p className="text-xs text-muted-foreground">shadcn/ui • Nova</p>
        </div>
        <ModeToggle />
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2">
          {/* Blocks Section */}
          <Collapsible open={blocksOpen} onOpenChange={setBlocksOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between px-2 py-1.5 h-auto text-muted-foreground"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Blocks
                </span>
                <svg
                  className={cn(
                    "h-4 w-4 transition-transform",
                    blocksOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-0.5 mt-1">
              {blocksData.map((block) => (
                <NavLink
                  key={block.id}
                  to={`/${block.id}`}
                  className={({ isActive }) => cn(
                    "flex items-center w-full px-2 py-1.5 rounded-md text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-secondary text-secondary-foreground" : "text-foreground"
                  )}
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  {block.name}
                </NavLink>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Components Section */}
          <Collapsible open={componentsOpen} onOpenChange={setComponentsOpen} className="mt-2">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between px-2 py-1.5 h-auto text-muted-foreground"
              >
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Components
                </span>
                <svg
                  className={cn(
                    "h-4 w-4 transition-transform",
                    componentsOpen && "rotate-180"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-0.5 mt-1">
              {componentsData.map((component) => (
                <NavLink
                  key={component.id}
                  to={`/components/${component.id}`}
                  className={({ isActive }) => cn(
                    "flex items-center w-full px-2 py-1.5 rounded-md text-sm font-normal transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive ? "bg-secondary text-secondary-foreground" : "text-foreground"
                  )}
                >
                  {component.name}
                </NavLink>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>
    </aside>
  );
}

