import React from 'react';
import { ComponentProps } from './propsType';
import { Watermark } from 'antd';

export const AntdWatermark = ({
  children,
  style,
  ...props
}: ComponentProps) => {
  return (
    <Watermark
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Watermark>
  );
};
