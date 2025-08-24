import React from 'react';
import { ComponentProps } from './propsType';
import { Upload } from 'antd';

export const AntdUpload = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Upload
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Upload>
  );
};
