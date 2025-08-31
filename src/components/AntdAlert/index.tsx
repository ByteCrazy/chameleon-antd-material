import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Alert } from 'antd';

export const AntdAlert = ({
  content,
  children,
  isContainer,
  style,
  ...props
}: ComponentProps) => {
  const child: any = useMemo(() => {
    return isContainer ? children : content;
  }, [isContainer, content, children]);

  return (
    <Alert
      {...props}
      style={{
        ...(style || {}),
      }}
      message={child}
    />
  );
};
