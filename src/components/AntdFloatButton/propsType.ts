import { FloatButtonProps } from 'antd';

export type ComponentProps = FloatButtonProps & {
  offsetPos?: {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  isContainer?: boolean;
};
