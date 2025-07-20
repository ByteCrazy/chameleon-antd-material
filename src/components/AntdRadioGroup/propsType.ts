import { RadioGroupProps } from 'antd';

export type ComponentProps = RadioGroupProps & {
  options: {}[];
  optionType?: 'default' | 'button';
  size?: 'large' | 'middle' | 'small';
  block?: boolean;
  name?: string;
  defaultValue: string;
  buttonStyle: 'outline' | 'solid';
};
