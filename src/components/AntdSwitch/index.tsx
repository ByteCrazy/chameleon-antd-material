import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Switch } from 'antd';

export const AntdSwitch = ({ checked, style, ...props }: ComponentProps) => {
  const innerChecked = useMemo(() => {
    return checked;
  }, [checked]);

  return (
    <Switch
      {...props}
      checked={innerChecked}
      style={{
        ...(style || {}),
      }}
    />
  );
};
