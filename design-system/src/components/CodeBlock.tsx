import { useState } from 'react';

interface CodeBlockProps {
  html: string;
  css: string;
  tailwind: string;
}

export function CodeBlock({ html, css, tailwind }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'tailwind'>('html');

  const tabs = [
    { key: 'html', label: 'HTML', content: html },
    { key: 'css', label: 'CSS', content: css },
    { key: 'tailwind', label: 'Tailwind', content: tailwind },
  ];

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'text-white bg-gray-800 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-gray-300 whitespace-pre-wrap">
          <code>{tabs.find(tab => tab.key === activeTab)?.content}</code>
        </pre>
      </div>
    </div>
  );
}
