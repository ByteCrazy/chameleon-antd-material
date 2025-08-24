import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '分页、排序、筛选变化时触发',
  },
  {
    name: 'onRow',
    event: 'onRow',
    descriptions: '设置行属性',
  },
  {
    name: 'onHeaderRow',
    event: 'onHeaderRow',
    descriptions: '设置头部行属性',
  },
  {
    name: 'onSelect',
    event: 'onSelect',
    descriptions: '用户手动选择/取消选择某行的回调',
  },
  {
    name: 'onSelectAll',
    event: 'onSelectAll',
    descriptions: '用户手动选择/取消选择所有行的回调',
  },
  ...DEFAULT_EVENT_LIST,
];
