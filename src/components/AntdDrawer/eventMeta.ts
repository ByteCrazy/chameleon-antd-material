import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onClose',
    event: 'onClose',
    descriptions: '点击遮罩层或右上角叉或取消按钮的回调',
  },
  {
    name: 'afterOpenChange',
    event: 'afterOpenChange',
    descriptions: '切换抽屉时动画结束后的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
