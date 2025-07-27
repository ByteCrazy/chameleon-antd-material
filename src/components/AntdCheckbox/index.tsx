import React, { useCallback, useMemo } from 'react';
import { ComponentProps } from './propsType';
import { Checkbox } from 'antd';
import { removeEmptyKey } from '../../utils';

export const AntdCheckbox = ({
  label,
  checked,
  onChange,
  ...props
}: ComponentProps) => {
  const innerProps = useMemo(() => {
    Object.keys(props).filter(Boolean);
    return removeEmptyKey(props);
  }, []);

  const innerOnchange = useCallback(
    (e: any) => {
      onChange?.(e.target.checked, e);
    },
    [onChange]
  );

  const innerValObject = useMemo(() => {
    const innerVal = checked;
    if (innerVal === undefined) {
      return {};
    }
    return { checked: innerVal };
  }, [checked]);

  return (
    <Checkbox {...innerProps} {...innerValObject} onChange={innerOnchange}>
      {label || 'checkBox'}
    </Checkbox>
  );
};
