import React from 'react';
import { ComponentProps } from './propsType';
import { InputNumber } from 'antd';

export const AntdInputNumber = (props: ComponentProps) => {
  return <InputNumber {...props}></InputNumber>;
};
