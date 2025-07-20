import React from 'react';
import { ComponentProps } from './propsType';
import { Select } from 'antd';

export const AntdSelect = (props: ComponentProps) => {
  return <Select {...props}></Select>;
};
