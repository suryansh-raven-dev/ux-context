import React from 'react';
import Fab, { FabProps } from '@mui/material/Fab';

export interface RavenFabProps extends FabProps {}

export const RavenFab: React.FC<RavenFabProps> = (props) => <Fab {...props} />;

export { Fab };
export type { FabProps };
