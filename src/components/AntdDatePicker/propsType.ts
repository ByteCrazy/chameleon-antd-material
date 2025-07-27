import { DatePickerProps } from 'antd';

export type ComponentProps = DatePickerProps & {
  value?: any;
  allowClear?: boolean;
  className?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  disabledDate?: (currentDate: any, info: { from?: any; type: any }) => boolean;
  format: string | ((val: any) => string);
  minDate?: string;
  maxDate?: string;
  needConfirm?: boolean;
  open?: boolean;
  picker?: 'date' | 'week' | 'month' | 'quarter' | 'year';
  placeholder?: string;
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
  size?: 'large' | 'small' | 'middle';
  variant?: 'outlined' | 'borderless' | 'filled' | 'underlined';
  showNow?: boolean;
  showTime?: boolean;
};
