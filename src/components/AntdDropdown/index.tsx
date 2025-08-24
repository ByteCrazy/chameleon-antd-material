import React from 'react';
import { ComponentProps } from './propsType';
import { Dropdown } from 'antd';

export const AntdDropdown = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Dropdown
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Dropdown>
  );
};
