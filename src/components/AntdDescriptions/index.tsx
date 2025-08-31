import React from 'react';
import { ComponentProps } from './propsType';
import { Descriptions } from 'antd';

export const AntdDescriptions = ({
  children,
  style,
  ...props
}: ComponentProps) => {
  return (
    <Descriptions
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Descriptions>
  );
};
