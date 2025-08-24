import { TitleProps } from 'antd/es/typography/Title';

export type ComponentProps = TitleProps & {
  content?: string;
  isContainer?: boolean;
};
