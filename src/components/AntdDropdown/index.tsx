import React from 'react';
import { ComponentProps } from './propsType';
import { Dropdown } from 'antd';

export const AntdDropdown = ({ children, ...props }: ComponentProps) => {
  return <Dropdown {...props}>{children}</Dropdown>;
};
