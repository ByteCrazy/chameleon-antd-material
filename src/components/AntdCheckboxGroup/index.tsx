import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Checkbox } from 'antd';

export const AntdCheckboxGroup = ({ options, ...props }: ComponentProps) => {
  const hasOptions = useMemo(() => {
    return Boolean(options && options.length);
  }, [options]);

  if (!hasOptions) {
    return <div>Please set options</div>;
  }
  return <Checkbox.Group {...props} options={options}></Checkbox.Group>;
};
