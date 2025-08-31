import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '选择时的回调',
  },
  {
    name: 'onHoverChange',
    event: 'onHoverChange',
    descriptions: '鼠标经过时数值变化的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
