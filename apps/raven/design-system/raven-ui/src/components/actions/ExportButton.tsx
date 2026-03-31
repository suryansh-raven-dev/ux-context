import { useId, useState, type MouseEvent } from 'react';

import ExpandMore from '@mui/icons-material/ExpandMoreRounded';
import FileDownload from '@mui/icons-material/FileDownloadRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { RavenButton } from '../inputs/RavenButton/RavenButton';

import './ExportButton.css';

export type ExportButtonProps = {
  onExport: (format: 'pdf' | 'csv' | 'xlsx') => void;
};

/**
 * Text button that opens a format menu for PDF, CSV, or XLSX export.
 */
export function ExportButton({ onExport }: ExportButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const menuId = useId();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const choose = (format: 'pdf' | 'csv' | 'xlsx') => {
    onExport(format);
    handleClose();
  };

  return (
    <>
      <RavenButton
        className="raven-export-button"
        type="button"
        variant="text"
        color="secondary"
        startIcon={<FileDownload fontSize="small" aria-hidden />}
        endIcon={<ExpandMore fontSize="small" aria-hidden />}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={handleOpen}
      >
        Export
      </RavenButton>
      <Menu id={menuId} anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => choose('pdf')}>PDF</MenuItem>
        <MenuItem onClick={() => choose('csv')}>CSV</MenuItem>
        <MenuItem onClick={() => choose('xlsx')}>XLSX</MenuItem>
      </Menu>
    </>
  );
}
