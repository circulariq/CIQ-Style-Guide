export interface BlockData {
  id: string;
  name: string;
  description: string;
}

export const blocksData: BlockData[] = [
  {
    id: "home",
    name: "Home",
    description: "Dashboard home page with cards, forms, and data displays"
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
  }
];

export const getBlockById = (id: string): BlockData | undefined => {
  return blocksData.find(block => block.id === id);
};

