import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onCheck',
    event: 'onCheck',
    descriptions: '点击复选框触发',
  },
  {
    name: 'onExpand',
    event: 'onExpand',
    descriptions: '展开/收起节点时触发',
  },
  {
    name: 'onSelect',
    event: 'onSelect',
    descriptions: '点击树节点触发',
  },
  ...DEFAULT_EVENT_LIST,
];
