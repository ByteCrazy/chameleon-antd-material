import React from 'react';
import { ComponentProps } from './propsType';
import { InputNumber } from 'antd';

export const AntdInputNumber = (props: ComponentProps) => {
  console.log('🚀 ~ AntdInputNumber ~ props:', props);
  return <InputNumber {...props}></InputNumber>;
};
