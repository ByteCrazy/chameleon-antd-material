import React from 'react';
import { ComponentProps } from './propsType';
import { Card } from 'antd';

export const AntdCard = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Card
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Card>
  );
};
