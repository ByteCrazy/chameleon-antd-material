import React from 'react';
import { ComponentProps } from './propsType';
import { Calendar } from 'antd';

export const AntdCalendar = ({ style, ...props }: ComponentProps) => {
  return (
    <Calendar
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
