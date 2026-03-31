import React, { useMemo, useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { List as WindowList } from 'react-window';

const PANEL_SX = { width: 240, overflow: 'auto' } as const;
const PANEL_TITLE_SX = { p: 1.5, fontWeight: 600 } as const;
const PANEL_LIST_SX = { height: 260, overflow: 'auto' } as const;
const LIST_ITEM_ICON_SX = { minWidth: 36 } as const;
const ROOT_GRID_SX = { justifyContent: 'center', alignItems: 'center' } as const;
const BUTTON_COLUMN_SX = { alignItems: 'center', gap: 1 } as const;

const DEFAULT_LIST_HEIGHT = 260;
const DEFAULT_ROW_HEIGHT = 44;
const DEFAULT_OVERSCAN = 6;
const DEFAULT_VIRTUALIZATION_THRESHOLD = 80;

function not(a: readonly string[], b: readonly string[]) {
  return a.filter((v) => !b.includes(v));
}

function intersection(a: readonly string[], b: readonly string[]) {
  return a.filter((v) => b.includes(v));
}

export interface RavenTransferListProps {
  leftItems?: string[];
  rightItems?: string[];
  leftTitle?: string;
  rightTitle?: string;
  virtualized?: boolean;
  virtualizationThreshold?: number;
  listHeight?: number;
  rowHeight?: number;
  overscanCount?: number;
}

export const RavenTransferList: React.FC<RavenTransferListProps> = ({
  leftItems: initialLeft = [],
  rightItems: initialRight = [],
  leftTitle = 'Available',
  rightTitle = 'Selected',
  virtualized = false,
  virtualizationThreshold = DEFAULT_VIRTUALIZATION_THRESHOLD,
  listHeight = DEFAULT_LIST_HEIGHT,
  rowHeight = DEFAULT_ROW_HEIGHT,
  overscanCount = DEFAULT_OVERSCAN,
}) => {
  const [checked, setChecked] = useState<readonly string[]>([]);
  const [left, setLeft] = useState<readonly string[]>(initialLeft);
  const [right, setRight] = useState<readonly string[]>(initialRight);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked) as string[]);
    setChecked(not(checked, leftChecked) as string[]);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked) as string[]);
    setChecked(not(checked, rightChecked) as string[]);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const shouldVirtualizeLeft = virtualized || left.length >= virtualizationThreshold;
  const shouldVirtualizeRight = virtualized || right.length >= virtualizationThreshold;

  const renderTransferRow = (value: string, style?: React.CSSProperties) => (
    <div key={value} style={style}>
      <ListItemButton onClick={handleToggle(value)}>
        <ListItemIcon sx={LIST_ITEM_ICON_SX}>
          <Checkbox
            checked={checked.includes(value)}
            tabIndex={-1}
            disableRipple
            size="small"
          />
        </ListItemIcon>
        <ListItemText primary={value} />
      </ListItemButton>
    </div>
  );

  const renderVirtualizedList = (items: readonly string[]) => (
    <WindowList
      rowCount={items.length}
      rowHeight={rowHeight}
      overscanCount={overscanCount}
      rowProps={{ items } as any}
      style={{ height: listHeight, width: '100%' }}
      defaultHeight={listHeight}
      rowComponent={
        (({
          index,
          style,
          items: rowItems,
        }: {
          index: number;
          style: React.CSSProperties;
          items: readonly string[];
        }) => renderTransferRow(rowItems[index], style)) as never
      }
    />
  );

  const customList = (title: string, items: readonly string[], shouldVirtualizeList: boolean) => (
    <Paper variant="outlined" sx={PANEL_SX}>
      <Typography variant="subtitle2" sx={PANEL_TITLE_SX}>
        {title} — {items.length} items
      </Typography>
      <Divider />
      {shouldVirtualizeList ? (
        <div aria-label={`${title} virtualized list`}>
          {renderVirtualizedList(items)}
        </div>
      ) : (
        <List dense sx={{ ...PANEL_LIST_SX, height: listHeight }}>
          {items.map((value) => renderTransferRow(value))}
        </List>
      )}
    </Paper>
  );

  const transferMeta = useMemo(
    () => ({
      leftVirtualized: shouldVirtualizeLeft,
      rightVirtualized: shouldVirtualizeRight,
    }),
    [shouldVirtualizeLeft, shouldVirtualizeRight],
  );

  return (
    <Grid container spacing={2} sx={ROOT_GRID_SX}>
      <Grid item>{customList(leftTitle, left, transferMeta.leftVirtualized)}</Grid>
      <Grid item>
        <Grid container direction="column" sx={BUTTON_COLUMN_SX}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
          >
            ≫
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
          >
            &lt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(rightTitle, right, transferMeta.rightVirtualized)}</Grid>
    </Grid>
  );
};
