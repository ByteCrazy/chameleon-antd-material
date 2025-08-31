import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onClose',
    event: 'onClose',
    descriptions: 'Message 被关闭时触发的回调函数',
  },
  ...DEFAULT_EVENT_LIST,
];
