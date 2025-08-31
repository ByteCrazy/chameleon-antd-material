import React from 'react';
import { ComponentProps } from './propsType';
import { Spin } from 'antd';

export const AntdSpin = ({
  children,
  style,
  ...props
}: ComponentProps) => {
  return (
    <Spin
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Spin>
  );
};
