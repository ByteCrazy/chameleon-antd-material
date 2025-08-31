import React from 'react';
import { ComponentProps } from './propsType';
import { Collapse } from 'antd';

export const AntdCollapse = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Collapse
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Collapse>
  );
};
