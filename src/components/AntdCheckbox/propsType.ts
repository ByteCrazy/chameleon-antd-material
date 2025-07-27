import { CheckboxProps } from 'antd';

export type ComponentProps = CheckboxProps & {
  label?: string;
  value?: string;
  onChange?: (value: boolean, event: any) => void;
};
