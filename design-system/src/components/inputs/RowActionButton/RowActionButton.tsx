import { forwardRef } from 'react';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';

import './RowActionButton.css';

export type RowActionButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
  icon?: React.ReactElement;
};

export const RowActionButton = forwardRef<HTMLButtonElement, RowActionButtonProps>(
  function RowActionButton({ onClick, ariaLabel = 'View details', icon }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className="raven-row-action-btn"
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icon ?? <ChevronRightRounded />}
      </button>
    );
  },
);
