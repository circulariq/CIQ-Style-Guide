export interface BlockData {
  id: string;
  name: string;
  description: string;
}

export const blocksData: BlockData[] = [
  {
    id: "component-preview",
    name: "Component Preview",
    description: "Dashboard preview with cards, forms, and data displays"
  },
  {
    id: "elevenlabs",
    name: "Elevenlabs",
    description: "Voice synthesis interface with audio controls"
  },
  {
    id: "github",
    name: "GitHub",
    description: "Code repository browser interface"
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Deployment dashboard with project stats"
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "AI chat interface with conversation history"
  },
  {
    id: "ai-tips",
    name: "AI Tips",
    description: "Complete guide for AI agents and developers to run and maintain this project"
  },
  {
    id: "playground",
    name: "Playground",
    description: "CIQ Design System Playground"
  }
];

export const getBlockById = (id: string): BlockData | undefined => {
  return blocksData.find(block => block.id === id);
};

