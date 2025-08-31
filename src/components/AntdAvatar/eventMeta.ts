import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onError',
    event: 'onError',
    descriptions: '图片加载失败的事件',
  },
  ...DEFAULT_EVENT_LIST,
];
