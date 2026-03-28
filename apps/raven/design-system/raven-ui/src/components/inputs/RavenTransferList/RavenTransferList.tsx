import React, { useState } from 'react';
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
}

export const RavenTransferList: React.FC<RavenTransferListProps> = ({
  leftItems: initialLeft = [],
  rightItems: initialRight = [],
  leftTitle = 'Available',
  rightTitle = 'Selected',
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

  const customList = (title: string, items: readonly string[]) => (
    <Paper
      variant="outlined"
      sx={{ width: 240, overflow: 'auto' }}
    >
      <Typography
        variant="subtitle2"
        sx={{ p: 1.5, fontWeight: 600 }}
      >
        {title} — {items.length} items
      </Typography>
      <Divider />
      <List dense sx={{ height: 260, overflow: 'auto' }}>
        {items.map((value) => (
          <ListItemButton key={value} onClick={handleToggle(value)}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Checkbox
                checked={checked.includes(value)}
                tabIndex={-1}
                disableRipple
                size="small"
              />
            </ListItemIcon>
            <ListItemText primary={value} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <Grid item>{customList(leftTitle, left)}</Grid>
      <Grid item>
        <Grid container direction="column" sx={{ alignItems: 'center', gap: 1 }}>
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
      <Grid item>{customList(rightTitle, right)}</Grid>
    </Grid>
  );
};
