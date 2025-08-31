import { TooltipProps } from 'antd';

export type ComponentProps = TooltipProps & {
  title?: string;
  isContainer?: boolean;
};
