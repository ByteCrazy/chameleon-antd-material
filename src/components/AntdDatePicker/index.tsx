import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

export const AntdDatePicker = ({
  value,
  minDate,
  maxDate,
  defaultValue,
  onChange,
  ...props
}: ComponentProps) => {
  const innerMinData = useMemo(() => {
    if (typeof minDate === 'string') {
      return dayjs(minDate);
    }
  }, [minDate]);

  const innerMaxDate = useMemo(() => {
    if (typeof maxDate === 'string') {
      return dayjs(minDate);
    }
  }, [maxDate]);

  const innerDefaultValue = useMemo(() => {
    if (typeof defaultValue === 'string') {
      return dayjs(minDate);
    }
  }, [defaultValue]);

  const innerValObj = useMemo(() => {
    let tempVal = value;
    if (typeof value === 'string') {
      tempVal = dayjs(value);
    }
    if (value === undefined) {
      return {};
    }

    return {
      value: tempVal,
    };
  }, [value]);

  return (
    <DatePicker
      {...props}
      minDate={innerMinData}
      maxDate={innerMaxDate}
      {...innerValObj}
      defaultValue={innerDefaultValue}
      onChange={(date, dateStr) => {
        onChange?.(date, dateStr);
      }}
    />
  );
};
