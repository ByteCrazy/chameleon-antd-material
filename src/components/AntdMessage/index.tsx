import React from 'react';
import { ComponentProps } from './propsType';
import { message } from 'antd';

export const AntdMessage = (props: ComponentProps) => {
  React.useEffect(() => {
    const {
      content,
      type,
      duration,
      icon,
      key,
      style,
      className,
      onClick,
      onClose,
    } = props;

    message[type || 'info']({
      content,
      duration,
      icon,
      key,
      style,
      className,
      onClick,
      onClose,
    });
  }, [props]);

  return null; // Message 组件不渲染 DOM
};
