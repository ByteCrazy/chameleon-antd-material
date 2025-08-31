import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onError',
    event: 'onError',
    descriptions: '加载错误回调',
  },
  ...DEFAULT_EVENT_LIST,
];
