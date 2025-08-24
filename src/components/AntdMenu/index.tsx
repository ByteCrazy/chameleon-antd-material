import React from 'react';
import { ComponentProps } from './propsType';
import { Menu } from 'antd';

export const AntdMenu = ({ style, ...props }: ComponentProps) => {
  return (
    <Menu
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
