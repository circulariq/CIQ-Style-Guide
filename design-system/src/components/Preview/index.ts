// Import all preview components
import { AccordionPreview } from './AccordionPreview';
import { AlertPreview } from './AlertPreview';
import { AlertDialogPreview } from './AlertDialogPreview';
import { AspectRatioPreview } from './AspectRatioPreview';
import { AvatarPreview } from './AvatarPreview';
import { BadgePreview } from './BadgePreview';
import { BreadcrumbPreview } from './BreadcrumbPreview';
import { ButtonPreview } from './ButtonPreview';
import { ButtonGroupPreview } from './ButtonGroupPreview';
import { CalendarPreview } from './CalendarPreview';
import { CardPreview } from './CardPreview';
import { CarouselPreview } from './CarouselPreview';
import { ChartPreview } from './ChartPreview';
import { CheckboxPreview } from './CheckboxPreview';
import { CollapsiblePreview } from './CollapsiblePreview';
import { ComboboxPreview } from './ComboboxPreview';
import { CommandPreview } from './CommandPreview';
import { ContextMenuPreview } from './ContextMenuPreview';
import { DialogPreview } from './DialogPreview';
import { DrawerPreview } from './DrawerPreview';
import { DropdownMenuPreview } from './DropdownMenuPreview';
import { EmptyPreview } from './EmptyPreview';
import { FieldPreview } from './FieldPreview';
import { HoverCardPreview } from './HoverCardPreview';
import { InputPreview } from './InputPreview';
import { InputGroupPreview } from './InputGroupPreview';
import { InputOTPPreview } from './InputOTPPreview';
import { ItemPreview } from './ItemPreview';
import { KbdPreview } from './KbdPreview';
import { LabelPreview } from './LabelPreview';
import { MenubarPreview } from './MenubarPreview';
import { NativeSelectPreview } from './NativeSelectPreview';
import { NavigationMenuPreview } from './NavigationMenuPreview';
import { PaginationPreview } from './PaginationPreview';
import { PopoverPreview } from './PopoverPreview';
import { ProgressPreview } from './ProgressPreview';
import { RadioGroupPreview } from './RadioGroupPreview';
import { ResizablePreview } from './ResizablePreview';
import { ScrollAreaPreview } from './ScrollAreaPreview';
import { SelectPreview } from './SelectPreview';
import { SeparatorPreview } from './SeparatorPreview';
import { SheetPreview } from './SheetPreview';
import { SidebarPreview } from './SidebarPreview';
import { SidebarIconPreview } from './SidebarIconPreview';
import { SidebarInsetPreview } from './SidebarInsetPreview';
import { SidebarFloatingPreview } from './SidebarFloatingPreview';
import { SkeletonPreview } from './SkeletonPreview';
import { SliderPreview } from './SliderPreview';
import { SonnerPreview } from './SonnerPreview';
import { SpinnerPreview } from './SpinnerPreview';
import { SwitchPreview } from './SwitchPreview';
import { TablePreview } from './TablePreview';
import { TabsPreview } from './TabsPreview';
import { TextareaPreview } from './TextareaPreview';
import { TogglePreview } from './TogglePreview';
import { ToggleGroupPreview } from './ToggleGroupPreview';
import { TooltipPreview } from './TooltipPreview';
import { ExamplePreview } from './ExamplePreview';

// Map component IDs to their preview components
export const previewComponents: Record<string, React.ComponentType> = {
  'accordion': AccordionPreview,
  'alert': AlertPreview,
  'alert-dialog': AlertDialogPreview,
  'aspect-ratio': AspectRatioPreview,
  'avatar': AvatarPreview,
  'badge': BadgePreview,
  'breadcrumb': BreadcrumbPreview,
  'button': ButtonPreview,
  'button-group': ButtonGroupPreview,
  'calendar': CalendarPreview,
  'card': CardPreview,
  'carousel': CarouselPreview,
  'chart': ChartPreview,
  'checkbox': CheckboxPreview,
  'collapsible': CollapsiblePreview,
  'combobox': ComboboxPreview,
  'command': CommandPreview,
  'context-menu': ContextMenuPreview,
  'dialog': DialogPreview,
  'drawer': DrawerPreview,
  'dropdown-menu': DropdownMenuPreview,
  'empty': EmptyPreview,
  'field': FieldPreview,
  'hover-card': HoverCardPreview,
  'input': InputPreview,
  'input-group': InputGroupPreview,
  'input-otp': InputOTPPreview,
  'item': ItemPreview,
  'kbd': KbdPreview,
  'label': LabelPreview,
  'menubar': MenubarPreview,
  'native-select': NativeSelectPreview,
  'navigation-menu': NavigationMenuPreview,
  'pagination': PaginationPreview,
  'popover': PopoverPreview,
  'progress': ProgressPreview,
  'radio-group': RadioGroupPreview,
  'resizable': ResizablePreview,
  'scroll-area': ScrollAreaPreview,
  'select': SelectPreview,
  'separator': SeparatorPreview,
  'sheet': SheetPreview,
  'sidebar': SidebarPreview,
  'sidebar-icon': SidebarIconPreview,
  'sidebar-inset': SidebarInsetPreview,
  'sidebar-floating': SidebarFloatingPreview,
  'skeleton': SkeletonPreview,
  'slider': SliderPreview,
  'sonner': SonnerPreview,
  'spinner': SpinnerPreview,
  'switch': SwitchPreview,
  'table': TablePreview,
  'tabs': TabsPreview,
  'textarea': TextareaPreview,
  'toggle': TogglePreview,
  'toggle-group': ToggleGroupPreview,
  'tooltip': TooltipPreview,
  'example': ExamplePreview,
};

// Also export individual components for direct imports
export {
  AccordionPreview,
  AlertPreview,
  AlertDialogPreview,
  AspectRatioPreview,
  AvatarPreview,
  BadgePreview,
  BreadcrumbPreview,
  ButtonPreview,
  ButtonGroupPreview,
  CalendarPreview,
  CardPreview,
  CarouselPreview,
  ChartPreview,
  CheckboxPreview,
  CollapsiblePreview,
  ComboboxPreview,
  CommandPreview,
  ContextMenuPreview,
  DialogPreview,
  DrawerPreview,
  DropdownMenuPreview,
  EmptyPreview,
  FieldPreview,
  HoverCardPreview,
  InputPreview,
  InputGroupPreview,
  InputOTPPreview,
  ItemPreview,
  KbdPreview,
  LabelPreview,
  MenubarPreview,
  NativeSelectPreview,
  NavigationMenuPreview,
  PaginationPreview,
  PopoverPreview,
  ProgressPreview,
  RadioGroupPreview,
  ResizablePreview,
  ScrollAreaPreview,
  SelectPreview,
  SeparatorPreview,
  SheetPreview,
  SidebarPreview,
  SidebarIconPreview,
  SidebarInsetPreview,
  SidebarFloatingPreview,
  SkeletonPreview,
  SliderPreview,
  SonnerPreview,
  SpinnerPreview,
  SwitchPreview,
  TablePreview,
  TabsPreview,
  TextareaPreview,
  TogglePreview,
  ToggleGroupPreview,
  TooltipPreview,
  ExamplePreview,
};
