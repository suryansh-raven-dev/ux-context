import Box from '@mui/material/Box';

export type SkipLinkProps = {
  /** Target element id, without the leading '#'. Defaults to 'main'. */
  targetId?: string;
  children?: string;
};

export function SkipLink({ targetId = 'main', children = 'Skip to main content' }: SkipLinkProps) {
  return (
    <Box
      component="a"
      href={`#${targetId}`}
      sx={{
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: (theme) => theme.zIndex.tooltip + 1,
        px: 2,
        py: 1,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        fontWeight: 600,
        textDecoration: 'none',
        borderRadius: 1,
        transform: 'translateY(-200%)',
        transition: 'transform 150ms ease-out',
        '&:focus, &:focus-visible': {
          transform: 'translateY(0)',
          outline: (theme) => `2px solid ${theme.palette.primary.main}`,
          outlineOffset: 2,
        },
      }}
    >
      {children}
    </Box>
  );
}
