import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Form } from 'antd';

function stringToRegExp(input: string): RegExp {
  const match = input.match(/^\/(.*)\/([gimsuy]*)$/);
  if (match) {
    const pattern = match[1];
    const flags = match[2];
    return new RegExp(pattern, flags);
  } else {
    // 普通字符串，默认不带任何 flag
    return new RegExp(input);
  }
}

export const AntdFormItem = ({ rules, ...props }: ComponentProps) => {
  const newRule = useMemo(() => {
    return (
      rules?.map((el) => {
        let newRes = el;
        // 将字符串正则转换为正则对象
        if ((el as any)?.pattern && typeof (el as any)?.pattern === 'string') {
          newRes = {
            ...el,
            pattern: stringToRegExp((el as any).pattern),
          };
        }
        return newRes;
      }) || []
    );
  }, [rules]);
  return <Form.Item {...props} rules={newRule}></Form.Item>;
};
