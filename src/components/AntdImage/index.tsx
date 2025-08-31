import React from 'react';
import { ComponentProps } from './propsType';
import { Image } from 'antd';

export const AntdImage = ({ style, ...props }: ComponentProps) => {
  return (
    <Image
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
