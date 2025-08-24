import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onOpenChange',
    event: 'onOpenChange',
    descriptions: '菜单显示状态改变时调用',
  },
  ...DEFAULT_EVENT_LIST,
];
