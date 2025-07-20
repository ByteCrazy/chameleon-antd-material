import React from 'react';
import { ComponentProps } from './propsType';
import { Radio } from 'antd';

export const AntdRadio = ({ text, checked, ...props }: ComponentProps) => {
  const checkObj = typeof checked !== 'boolean' ? {} : { checked };
  return (
    <Radio {...props} {...checkObj}>
      {text || 'label'}
    </Radio>
  );
};
