import React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';

export interface RavenSliderProps extends SliderProps {}

export const RavenSlider: React.FC<RavenSliderProps> = (props) => (
  <Slider {...props} />
);

export { Slider };
export type { SliderProps };
