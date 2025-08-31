import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'beforeChange',
    event: 'beforeChange',
    descriptions: '切换面板的回调',
  },
  {
    name: 'afterChange',
    event: 'afterChange',
    descriptions: '切换面板后的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
