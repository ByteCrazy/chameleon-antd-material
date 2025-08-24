import React from 'react';
import { ComponentProps } from './propsType';
import { Slider } from 'antd';

export const AntdSlider = ({ style, ...props }: ComponentProps) => {
  return (
    <Slider
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
