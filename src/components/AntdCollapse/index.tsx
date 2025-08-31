import React from 'react';
import { ComponentProps } from './propsType';
import { Collapse } from 'antd';

export const AntdCollapse = ({ children, style, ...props }: ComponentProps) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>{text}</p>,
    },
  ];
  return (
    <Collapse
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Collapse>
  );
};
