import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Input } from 'antd';

export const AntdInput = ({ children, value, ...props }: ComponentProps) => {
  const innerValue = useMemo(() => {
    return value || undefined;
  }, [value]);
  return <Input {...props} value={innerValue} />;
};
