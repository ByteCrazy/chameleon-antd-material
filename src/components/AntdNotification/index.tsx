import React from 'react';
import { ComponentProps } from './propsType';
import { notification } from 'antd';

export const AntdNotification = (props: ComponentProps) => {
  React.useEffect(() => {
    const {
      message,
      description,
      type,
      duration,
      icon,
      key,
      style,
      className,
      btn,
      closeIcon,
      onClick,
      onClose,
    } = props;

    notification[type || 'info']({
      message,
      description,
      duration,
      icon,
      key,
      style,
      className,
      btn,
      closeIcon,
      onClick,
      onClose,
    });
  }, [props]);

  return null; // Notification 组件不渲染 DOM
};
