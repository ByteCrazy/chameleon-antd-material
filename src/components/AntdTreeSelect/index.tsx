import React from 'react';
import { ComponentProps } from './propsType';
import { TreeSelect } from 'antd';

export const AntdTreeSelect = ({ style, ...props }: ComponentProps) => {
  return (
    <TreeSelect
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
