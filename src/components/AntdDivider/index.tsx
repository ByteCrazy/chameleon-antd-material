import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Divider } from 'antd';

export const AntdDivider = ({
  isContainer,
  children,
  borderColor,
  style,
  ...props
}: ComponentProps) => {
  const child = useMemo(() => {
    return isContainer ? children : null;
  }, [isContainer, children]);
  return (
    <Divider
      {...props}
      children={child}
      style={{
        ...(borderColor ? { borderColor: borderColor } : {}),
        ...(style || {}),
      }}
    />
  );
};
