import React from 'react';
import { ComponentProps } from './propsType';
import { Select } from 'antd';

export const AntdSelect = (props: ComponentProps) => {
  console.log('🚀 ~ AntdSelect ~ props:', props);
  return <Select {...props}></Select>;
};
