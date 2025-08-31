import React from 'react';
import { ComponentProps } from './propsType';
import { Tooltip } from 'antd';

export const AntdTooltip = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Tooltip
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Tooltip>
  );
};
