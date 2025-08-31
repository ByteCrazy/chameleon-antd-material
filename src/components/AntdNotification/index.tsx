import React from 'react';
import { ComponentProps } from './propsType';
import { notification } from 'antd';

export const AntdNotification = (props: ComponentProps) => {
  const [api, contextHolder] = notification.useNotification();

  return <span>{contextHolder}</span>;
};
