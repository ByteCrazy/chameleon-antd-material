import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Typography } from 'antd';

const { Title } = Typography;

export const AntdTitle = ({
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
    <Title
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {child}
    </Title>
  );
};
