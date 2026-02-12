import { useState } from 'react';
import { Sidebar, ViewType } from './components/Sidebar';
import { ComponentData } from './data/components';
import { blocksData, BlockData } from './data/blocks';
import { previewComponents } from './components/Preview';
import * as BlockComponents from './components/Blocks';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [selectedItem, setSelectedItem] = useState<ComponentData | BlockData | null>(
    blocksData[0] || null
  );
  const [selectedType, setSelectedType] = useState<ViewType>('block');

  const handleItemSelect = (item: ComponentData | BlockData, type: ViewType) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  const renderBlockPreview = (blockId: string) => {
    const blockMap: Record<string, React.ComponentType> = {
      'component-preview': BlockComponents.ComponentPreviewBlock,
      'ai-tips': BlockComponents.AITipsBlock,
      'elevenlabs': BlockComponents.ElevenlabsBlock,
      'github': BlockComponents.GitHubBlock,
      'vercel': BlockComponents.VercelBlock,
      'chatgpt': BlockComponents.ChatGPTBlock,
    };

    const BlockComponent = blockMap[blockId];
    return BlockComponent ? <BlockComponent /> : <div>Block not found</div>;
  };

  const renderComponentPreview = (componentId: string) => {
    const PreviewComponent = previewComponents[componentId];
    return PreviewComponent ? <PreviewComponent /> : (
      <div className="text-muted-foreground text-center py-8">
        Preview coming soon for {componentId}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar
        selectedItem={selectedItem}
        selectedType={selectedType}
        onItemSelect={handleItemSelect}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card">
          <div>
            <h2 className="text-lg font-semibold">
              {selectedItem?.name || 'Select a component'}
            </h2>
            {selectedItem && 'description' in selectedItem && (
              <p className="text-xs text-muted-foreground">{selectedItem.description}</p>
            )}
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="p-6">
            {selectedItem ? (
              selectedType === 'block' ? (
                <div className="space-y-6">
                  {renderBlockPreview(selectedItem.id)}
                </div>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>{selectedItem.name}</CardTitle>
                    {'description' in selectedItem && (
                      <CardDescription>{selectedItem.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    {renderComponentPreview(selectedItem.id)}
                  </CardContent>
                </Card>
              )
            ) : (
              <div className="flex items-center justify-center h-[50vh]">
                <p className="text-muted-foreground">Select a block or component from the sidebar</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </main>

      <Toaster />
    </div>
  );
}

export default App;
