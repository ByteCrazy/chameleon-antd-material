import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onTabChange',
    event: 'onTabChange',
    descriptions: '页签切换的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
