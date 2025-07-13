import React from 'react';
import { ComponentProps } from './propsType';
import { Form } from 'antd';

export const AntdFormItem = (props: ComponentProps) => {
  return <Form.Item {...props}></Form.Item>;
};
