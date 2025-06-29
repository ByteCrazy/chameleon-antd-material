import React from 'react';
import { ComponentProps } from './propsType';
import { Input } from 'antd';

export const AntdInput = ({ children, ...props }: ComponentProps) => {
  return <Input {...props} />;
};
