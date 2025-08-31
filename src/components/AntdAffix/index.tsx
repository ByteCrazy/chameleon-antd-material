import React from 'react';
import { ComponentProps } from './propsType';
import { Affix } from 'antd';

export const AntdAffix = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Affix
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Affix>
  );
};
