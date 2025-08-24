import React from 'react';
import { ComponentProps } from './propsType';
import { Drawer } from 'antd';

export const AntdDrawer = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Drawer
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Drawer>
  );
};
