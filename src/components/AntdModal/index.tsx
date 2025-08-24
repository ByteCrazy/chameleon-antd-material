import React from 'react';
import { ComponentProps } from './propsType';
import { Modal } from 'antd';

export const AntdModal = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Modal
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Modal>
  );
};
