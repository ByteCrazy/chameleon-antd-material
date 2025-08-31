import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Popover } from 'antd';

export const AntdPopover = ({
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
    <Popover
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {child}
    </Popover>
  );
};
