import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from '@radix-ui/react-popover';

Popover.displayName = 'RadixPopover';
PopoverAnchor.displayName = 'RadixPopover.Anchor';
PopoverArrow.displayName = 'RadixPopover.Arrow';
PopoverClose.displayName = 'RadixPopover.Close';
PopoverContent.displayName = 'RadixPopover.Content';
PopoverPortal.displayName = 'RadixPopover.Portal';
PopoverTrigger.displayName = 'RadixPopover.Trigger';

type TPopover = typeof Popover & {
  Anchor: typeof PopoverAnchor;
  Arrow: typeof PopoverArrow;
  Close: typeof PopoverClose;
  Content: typeof PopoverContent;
  Portal: typeof PopoverPortal;
  Trigger: typeof PopoverTrigger;
};

export const RadixPopover = Popover as TPopover;
RadixPopover.Anchor = PopoverAnchor;
RadixPopover.Arrow = PopoverArrow;
RadixPopover.Close = PopoverClose;
RadixPopover.Content = PopoverContent;
RadixPopover.Portal = PopoverPortal;
RadixPopover.Trigger = PopoverTrigger;
