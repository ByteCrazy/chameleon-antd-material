import React from 'react';
import { ComponentProps } from './propsType';
import { Flex } from 'antd';

export const AntdFlex = (props: ComponentProps) => {
  return <Flex {...props}></Flex>;
};
