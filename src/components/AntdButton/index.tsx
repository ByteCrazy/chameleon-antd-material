import React from 'react';
import { ComponentProps } from './propsType';
import { Button } from 'antd';

export const AntdButton = (props: ComponentProps) => {
  return <Button {...props} />;
};
