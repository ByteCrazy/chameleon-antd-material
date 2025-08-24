import React from 'react';
import { ComponentProps } from './propsType';
import { Table } from 'antd';

export const AntdTable = ({ style, ...props }: ComponentProps) => {
  return (
    <Table
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
