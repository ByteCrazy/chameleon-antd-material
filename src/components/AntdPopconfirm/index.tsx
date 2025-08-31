import React from 'react';
import { ComponentProps } from './propsType';
import { Popconfirm } from 'antd';

export const AntdPopconfirm = ({
  children,
  style,
  ...props
}: ComponentProps) => {
  return (
    <Popconfirm
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Popconfirm>
  );
};
