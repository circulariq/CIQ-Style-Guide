import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { getComponentById } from './data/components';
import { blocksData } from './data/blocks';
import { previewComponents } from './components/Preview';
import * as BlockComponents from './components/Blocks';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';

const BlockPreview = () => {
  const { blockId } = useParams<{ blockId: string }>();
  const block = blocksData.find(b => b.id === blockId);

  const blockMap: Record<string, React.ComponentType> = {
    'component-preview': BlockComponents.ComponentPreviewBlock,
    'ai-tips': BlockComponents.AITipsBlock,
    'elevenlabs': BlockComponents.ElevenlabsBlock,
    'github': BlockComponents.GitHubBlock,
    'vercel': BlockComponents.VercelBlock,
    'chatgpt': BlockComponents.ChatGPTBlock,
  };

  const BlockComponent = blockId ? blockMap[blockId] : null;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card shrink-0">
        <div>
          <h2 className="text-lg font-semibold">
            {block?.name || 'Block not found'}
          </h2>
          {block && (
            <p className="text-xs text-muted-foreground">{block.description}</p>
          )}
        </div>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="space-y-6">
            {BlockComponent ? <BlockComponent /> : <div className="text-muted-foreground">Select a block from the sidebar</div>}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

const ComponentPreview = () => {
  const { componentId } = useParams<{ componentId: string }>();
  const component = getComponentById(componentId || '');
  const PreviewComponent = componentId ? previewComponents[componentId] : null;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card shrink-0">
        <div>
          <h2 className="text-lg font-semibold">
            {component?.name || 'Component not found'}
          </h2>
          {component && (
            <p className="text-xs text-muted-foreground">{component.description}</p>
          )}
        </div>
      </header>

      <ScrollArea className="flex-1">
        <div className="p-6">
          {component ? (
            <Card>
              <CardHeader>
                <CardTitle>{component.name}</CardTitle>
                <CardDescription>{component.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {PreviewComponent ? <PreviewComponent /> : (
                  <div className="text-muted-foreground text-center py-8">
                    Preview coming soon for {componentId}
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="text-muted-foreground">Select a component from the sidebar</div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background text-foreground overflow-hidden">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-hidden relative">
          <Routes>
            <Route path="/" element={<Navigate to="/component-preview" replace />} />
            <Route path="/ai-tips" element={<Navigate to="/ai-tips/ai" replace />} />
            <Route path="/:blockId/:subpage?" element={<BlockPreview />} />
            <Route path="/components/:componentId" element={<ComponentPreview />} />
          </Routes>
        </main>

        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

