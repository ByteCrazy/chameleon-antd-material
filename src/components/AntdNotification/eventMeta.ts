import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onClose',
    event: 'onClose',
    descriptions: '通知提醒被关闭时触发的回调函数',
  },
  {
    name: 'onClick',
    event: 'onClick',
    descriptions: '点击通知提醒时触发的回调函数',
  },
  ...DEFAULT_EVENT_LIST,
];
