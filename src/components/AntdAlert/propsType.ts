import { AlertProps } from 'antd';

export type ComponentProps = AlertProps & {
  content?: string;
  isContainer?: boolean;
  children?: React.ReactNode;
};
