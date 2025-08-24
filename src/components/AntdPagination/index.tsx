import React from 'react';
import { ComponentProps } from './propsType';
import { Pagination } from 'antd';

export const AntdPagination = ({ style, ...props }: ComponentProps) => {
  return (
    <Pagination
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
