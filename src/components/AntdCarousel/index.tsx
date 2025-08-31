import React from 'react';
import { ComponentProps } from './propsType';
import { Carousel } from 'antd';

export const AntdCarousel = ({ children, style, ...props }: ComponentProps) => {
  return (
    <Carousel
      {...props}
      style={{
        ...(style || {}),
      }}
    >
      {children}
    </Carousel>
  );
};
