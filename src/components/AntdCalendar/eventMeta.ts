import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onPanelChange',
    event: 'onPanelChange',
    descriptions: '日期面板变化时的回调',
  },
  {
    name: 'onSelect',
    event: 'onSelect',
    descriptions: '选择日期的回调',
  },
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '日期变化时的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
