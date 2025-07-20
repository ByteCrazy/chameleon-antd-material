import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Radio } from 'antd';

export const AntdRadioGroup = ({ options, ...props }: ComponentProps) => {
  const hasOptions = useMemo(() => {
    return Boolean(options && options.length);
  }, [options]);

  console.log('🚀 ~ hasOptions ~ hasOptions:', hasOptions);
  if (!hasOptions) {
    return <div>Please set options</div>;
  }
  return <Radio.Group {...props} options={options}></Radio.Group>;
};
