import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Calendar } from 'antd';
import dayjs from 'dayjs';

export const AntdCalendar = ({
  style,
  value,
  defaultValue,
  ...props
}: ComponentProps) => {
  const innerValue = useMemo(() => {
    if (value) {
      return {
        value: dayjs(value),
      };
    }
    return {};
  }, [value]);

  const innerDefaultValue = useMemo(() => {
    if (defaultValue) {
      return {
        value: dayjs(defaultValue),
      };
    }
    return {};
  }, [defaultValue]);
  return (
    <Calendar
      {...props}
      {...innerValue}
      {...innerDefaultValue}
      style={{
        ...(style || {}),
      }}
    />
  );
};
