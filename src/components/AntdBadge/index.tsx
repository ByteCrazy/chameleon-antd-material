import React from 'react';
import { ComponentProps } from './propsType';
import { Badge } from 'antd';

export const AntdBadge = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Badge
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Badge>
  );
};
