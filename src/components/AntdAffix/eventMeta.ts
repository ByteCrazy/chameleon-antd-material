import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '固定状态改变时触发',
  },
  ...DEFAULT_EVENT_LIST,
];
