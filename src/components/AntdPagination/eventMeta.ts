import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '页码或 pageSize 改变的回调',
  },
  {
    name: 'onShowSizeChange',
    event: 'onShowSizeChange',
    descriptions: 'pageSize 变化的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
