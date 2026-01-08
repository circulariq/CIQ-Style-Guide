export interface ComponentData {
  id: string;
  name: string;
  category: string;
  description: string;
}

export const componentsData: ComponentData[] = [
  // Form Components
  { id: "accordion", name: "Accordion", category: "Components", description: "A vertically stacked set of interactive headings that reveal content" },
  { id: "alert", name: "Alert", category: "Components", description: "Displays a callout for user attention" },
  { id: "alert-dialog", name: "Alert Dialog", category: "Components", description: "A modal dialog that interrupts the user with important content" },
  { id: "aspect-ratio", name: "Aspect Ratio", category: "Components", description: "Displays content within a desired ratio" },
  { id: "avatar", name: "Avatar", category: "Components", description: "An image element with a fallback for representing the user" },
  { id: "badge", name: "Badge", category: "Components", description: "Displays a badge or a component that looks like a badge" },
  { id: "breadcrumb", name: "Breadcrumb", category: "Components", description: "Displays the path to the current resource using a hierarchy of links" },
  { id: "button", name: "Button", category: "Components", description: "Displays a button or a component that looks like a button" },
  { id: "button-group", name: "Button Group", category: "Components", description: "A set of buttons grouped together" },
  { id: "calendar", name: "Calendar", category: "Components", description: "A date field component that allows users to enter and edit date" },
  { id: "card", name: "Card", category: "Components", description: "Displays a card with header, content, and footer" },
  { id: "carousel", name: "Carousel", category: "Components", description: "A carousel with motion and swipe built using Embla" },
  { id: "chart", name: "Chart", category: "Components", description: "Beautiful charts built using Recharts" },
  { id: "checkbox", name: "Checkbox", category: "Components", description: "A control that allows the user to toggle between checked and not checked" },
  { id: "collapsible", name: "Collapsible", category: "Components", description: "An interactive component which expands/collapses a panel" },
  { id: "combobox", name: "Combobox", category: "Components", description: "Autocomplete input and command palette with a list of suggestions" },
  { id: "command", name: "Command", category: "Components", description: "Fast, composable, unstyled command menu for React" },
  { id: "context-menu", name: "Context Menu", category: "Components", description: "Displays a menu to the user triggered by a right-click" },
  { id: "dialog", name: "Dialog", category: "Components", description: "A window overlaid on the primary window" },
  { id: "drawer", name: "Drawer", category: "Components", description: "A drawer component for React" },
  { id: "dropdown-menu", name: "Dropdown Menu", category: "Components", description: "Displays a menu to the user triggered by a button" },
  { id: "empty", name: "Empty", category: "Components", description: "Empty state placeholder component" },
  { id: "field", name: "Field", category: "Components", description: "Form field with label, input, and helper text" },
  { id: "hover-card", name: "Hover Card", category: "Components", description: "For sighted users to preview content available behind a link" },
  { id: "input", name: "Input", category: "Components", description: "Displays a form input field" },
  { id: "input-group", name: "Input Group", category: "Components", description: "Input with prefix or suffix elements" },
  { id: "input-otp", name: "Input OTP", category: "Components", description: "Accessible one-time password component" },
  { id: "item", name: "Item", category: "Components", description: "A selectable item component" },
  { id: "kbd", name: "Kbd", category: "Components", description: "Keyboard key indicator component" },
  { id: "label", name: "Label", category: "Components", description: "Renders an accessible label associated with controls" },
  { id: "menubar", name: "Menubar", category: "Components", description: "A visually persistent menu common in desktop applications" },
  { id: "native-select", name: "Native Select", category: "Components", description: "Native HTML select element with styling" },
  { id: "navigation-menu", name: "Navigation Menu", category: "Components", description: "A collection of links for navigating websites" },
  { id: "pagination", name: "Pagination", category: "Components", description: "Pagination with page navigation, previous and next buttons" },
  { id: "popover", name: "Popover", category: "Components", description: "Displays rich content in a portal, triggered by a button" },
  { id: "progress", name: "Progress", category: "Components", description: "Displays an indicator showing the completion progress of a task" },
  { id: "radio-group", name: "Radio Group", category: "Components", description: "A set of checkable buttons where only one can be checked at a time" },
  { id: "resizable", name: "Resizable", category: "Components", description: "Accessible resizable panel groups and layouts" },
  { id: "scroll-area", name: "Scroll Area", category: "Components", description: "Augments native scroll functionality for custom styling" },
  { id: "select", name: "Select", category: "Components", description: "Displays a list of options for the user to pick from" },
  { id: "separator", name: "Separator", category: "Components", description: "Visually or semantically separates content" },
  { id: "sheet", name: "Sheet", category: "Components", description: "Extends the Dialog component to display content that complements the main content" },
  { id: "sidebar", name: "Sidebar", category: "Components", description: "A composable, themeable and customizable sidebar component" },
  { id: "sidebar-icon", name: "Sidebar (Icon)", category: "Components", description: "Sidebar with icon-only collapsed state" },
  { id: "sidebar-inset", name: "Sidebar (Inset)", category: "Components", description: "Inset sidebar layout variant" },
  { id: "sidebar-floating", name: "Sidebar (Floating)", category: "Components", description: "Floating sidebar layout variant" },
  { id: "skeleton", name: "Skeleton", category: "Components", description: "Use to show a placeholder while content is loading" },
  { id: "slider", name: "Slider", category: "Components", description: "An input where the user selects a value from within a given range" },
  { id: "sonner", name: "Sonner", category: "Components", description: "An opinionated toast component for React" },
  { id: "spinner", name: "Spinner", category: "Components", description: "Loading spinner indicator" },
  { id: "switch", name: "Switch", category: "Components", description: "A control that allows the user to toggle between two states" },
  { id: "table", name: "Table", category: "Components", description: "A responsive table component" },
  { id: "tabs", name: "Tabs", category: "Components", description: "A set of layered sections of content displayed one at a time" },
  { id: "textarea", name: "Textarea", category: "Components", description: "Displays a form textarea" },
  { id: "toggle", name: "Toggle", category: "Components", description: "A two-state button that can be either on or off" },
  { id: "toggle-group", name: "Toggle Group", category: "Components", description: "A set of two-state buttons that can be toggled on or off" },
  { id: "tooltip", name: "Tooltip", category: "Components", description: "A popup that displays information related to an element" },
  { id: "example", name: "Example", category: "Components", description: "Example component demonstrating various patterns" },
];

export const categories = ["Components"];

export const getComponentsByCategory = (category: string): ComponentData[] => {
  return componentsData.filter(component => component.category === category);
};

export const getComponentById = (id: string): ComponentData | undefined => {
  return componentsData.find(component => component.id === id);
};
