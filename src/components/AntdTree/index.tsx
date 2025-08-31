import React from 'react';
import { ComponentProps } from './propsType';
import { Tree } from 'antd';

export const AntdTree = ({ style, ...props }: ComponentProps) => {
  return (
    <Tree
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
