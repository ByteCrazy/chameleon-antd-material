import { PopoverProps } from 'antd';

export type ComponentProps = PopoverProps & {
  content?: string;
  isContainer?: boolean;
};
