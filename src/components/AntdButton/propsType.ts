import { ButtonProps } from 'antd';

export type ComponentProps = ButtonProps & {
  content?: string;
  isContainer?: boolean;
};
