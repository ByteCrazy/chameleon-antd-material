import React from 'react';
import { ComponentProps } from './propsType';
import { Empty } from 'antd';

export const AntdEmpty = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Empty
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Empty>
  );
};
