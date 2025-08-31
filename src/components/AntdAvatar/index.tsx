import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Avatar } from 'antd';

export const AntdAvatar = ({
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
    <Avatar
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {child}
    </Avatar>
  );
};
