import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '时间发生变化的回调',
  },
  {
    name: 'onOpenChange',
    event: 'onOpenChange',
    descriptions: '面板打开/关闭时的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
