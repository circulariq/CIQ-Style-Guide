import { ComponentData } from '../data/components';
import { CodeBlock } from './CodeBlock';

interface ComponentCardProps {
  component: ComponentData;
  previewComponent: React.ComponentType<any>;
}

export function ComponentCard({ component, previewComponent: PreviewComponent }: ComponentCardProps) {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{component.name}</h2>
        <p className="text-gray-600">{component.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
        <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg">
          <PreviewComponent {...(component.previewProps || {})} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Code</h3>
        <CodeBlock
          html={component.html}
          css={component.css}
          tailwind={component.tailwind}
        />
      </div>
    </div>
  );
}
