import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react';

import { List } from 'react-window';

const DEFAULT_LISTBOX_HEIGHT = 320;
const DEFAULT_ROW_HEIGHT = 40;
const DEFAULT_OVERSCAN = 6;

export type VirtualizedAutocompleteListboxProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
  itemSize?: number;
  listboxHeight?: number;
  overscanCount?: number;
};

type VirtualizedAutocompleteRowProps = {
  items: ReactNode[];
};

function VirtualizedAutocompleteRow({
  index,
  style,
  items,
}: {
  index: number;
  style: CSSProperties;
} & VirtualizedAutocompleteRowProps) {
  const item = items[index];

  if (!isValidElement(item)) {
    return null;
  }

  return cloneElement(item, {
    style: {
      ...(item.props.style ?? {}),
      ...style,
    },
  });
}

export const VirtualizedAutocompleteListbox = forwardRef<
  HTMLDivElement,
  VirtualizedAutocompleteListboxProps
>(function VirtualizedAutocompleteListbox(
  {
    children,
    itemSize = DEFAULT_ROW_HEIGHT,
    listboxHeight = DEFAULT_LISTBOX_HEIGHT,
    overscanCount = DEFAULT_OVERSCAN,
    style,
    ...rest
  },
  ref,
) {
  const items = Children.toArray(children);
  const height = Math.min(listboxHeight, Math.max(items.length * itemSize, itemSize));

  return (
    <div
      {...rest}
      ref={ref}
      style={{
        ...(style ?? {}),
        padding: 0,
        maxHeight: 'none',
      }}
    >
      <List
        rowCount={items.length}
        rowHeight={itemSize}
        rowProps={{ items } as any}
        rowComponent={VirtualizedAutocompleteRow as never}
        overscanCount={overscanCount}
        style={{ height, width: '100%' }}
        defaultHeight={height}
      />
    </div>
  );
});
