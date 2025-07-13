import React, { useImperativeHandle } from 'react';
import { ComponentProps } from './propsType';
import { Form } from 'antd';

export const AntdForm = React.forwardRef(
  ({ children, ...props }: ComponentProps, ref) => {
    console.log('🚀 ~ ref:', ref);
    const [form] = Form.useForm();

    useImperativeHandle(
      ref,
      () => {
        console.log(99988989);
        return {
          setFieldValues: (v: any) => {
            console.log(111, v);
          },
        };
      },
      [form]
    );

    return (
      <Form form={form} {...props}>
        <>{children}</>
      </Form>
    );
  }
);
