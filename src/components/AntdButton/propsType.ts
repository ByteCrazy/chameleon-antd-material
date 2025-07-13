import { ButtonProps } from 'antd';

export type ComponentProps = ButtonProps & {
  content?: string;
  isContainer?: boolean;
  autoHeight?: boolean;
  isSubmit?: boolean;
};
