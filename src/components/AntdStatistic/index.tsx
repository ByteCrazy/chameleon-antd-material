import React from 'react';
import { ComponentProps } from './propsType';
import { Statistic } from 'antd';

export const AntdStatistic = ({ style, ...props }: ComponentProps) => {
  return (
    <Statistic
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
