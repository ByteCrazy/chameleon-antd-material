import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onCancel',
    event: 'onCancel',
    descriptions: '点击遮罩层或右上角叉或取消按钮的回调',
  },
  {
    name: 'onOk',
    event: 'onOk',
    descriptions: '点击确定回调',
  },
  {
    name: 'afterClose',
    event: 'afterClose',
    descriptions: 'Modal 完全关闭后的回调',
  },
  {
    name: 'afterOpenChange',
    event: 'afterOpenChange',
    descriptions: '打开和关闭动画结束后的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
