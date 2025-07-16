import React, { useImperativeHandle } from 'react';
import { ComponentProps } from './propsType';
import { Form } from 'antd';

export const AntdForm = React.forwardRef(
  ({ children, ...props }: ComponentProps, ref) => {
    const [form] = Form.useForm();

    useImperativeHandle(
      ref,
      () => {
        return {
          setFieldValues: (v: any) => {
            form.setFieldsValue(v);
          },
          setFieldValue: (name: string, val: string) => {
            form.setFieldValue(name, val);
          },
          getFieldsValue: () => {
            return form.getFieldsValue();
          },
          getFieldValue: (name: string) => {
            return form.getFieldValue(name);
          },
          validateFields: (...args: any) => {
            return form.validateFields(...args);
          },
          resetFormValues: () => {
            form.resetFields();
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
