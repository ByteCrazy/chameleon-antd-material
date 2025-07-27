import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onOpenChange',
    event: 'onOpenChange',
    descriptions: '弹出日历和关闭日历的回调	',
  },
  {
    name: 'onPanelChange',
    event: 'onPanelChange',
    descriptions: '日历面板切换的回调',
  },
  {
    name: 'onOk',
    event: 'onOk',
    descriptions: '点击确定按钮的回调	',
  },

  ...DEFAULT_EVENT_LIST,
];
