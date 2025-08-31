import React from 'react';
import { ComponentProps } from './propsType';
import { Progress } from 'antd';

export const AntdProgress = ({ style, ...props }: ComponentProps) => {
  return (
    <Progress
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
