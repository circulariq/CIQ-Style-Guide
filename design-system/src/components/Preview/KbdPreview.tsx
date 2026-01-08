export function KbdPreview() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd> to open the command menu.
      </p>
      
      <div className="flex gap-2">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>C
        </kbd>
        <span className="text-sm">Copy</span>
      </div>
      
      <div className="flex gap-2">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>V
        </kbd>
        <span className="text-sm">Paste</span>
      </div>
      
      <div className="flex gap-2">
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>
          <span className="text-xs">⇧</span>P
        </kbd>
        <span className="text-sm">Command Palette</span>
      </div>
    </div>
  );
}

