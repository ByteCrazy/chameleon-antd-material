import React from 'react';
import { ComponentProps } from './propsType';
import { Rate } from 'antd';

export const AntdRate = ({ style, ...props }: ComponentProps) => {
  return (
    <Rate
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
