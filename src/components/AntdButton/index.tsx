import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Button } from 'antd';

export const AntdButton = ({
  content,
  children,
  isContainer,
  ...props
}: ComponentProps) => {
  const child: any = useMemo(() => {
    return isContainer ? children : content;
  }, [isContainer, content, children]);

  return <Button {...props} children={child}></Button>;
};
