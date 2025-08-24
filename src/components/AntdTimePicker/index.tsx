import React from 'react';
import { ComponentProps } from './propsType';
import { TimePicker } from 'antd';

export const AntdTimePicker = ({ style, ...props }: ComponentProps) => {
  return (
    <TimePicker
      {...props}
      style={{
        ...(style || {}),
      }}
    />
  );
};
