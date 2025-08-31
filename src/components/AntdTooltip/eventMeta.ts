import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onOpenChange',
    event: 'onOpenChange',
    descriptions: '显示状态改变时触发',
  },
  ...DEFAULT_EVENT_LIST,
];
