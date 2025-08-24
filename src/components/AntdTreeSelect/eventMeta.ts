import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '选中树节点时触发',
  },
  {
    name: 'onSelect',
    event: 'onSelect',
    descriptions: '被选中时调用',
  },
  {
    name: 'onSearch',
    event: 'onSearch',
    descriptions: '搜索框值变化时回调',
  },
  {
    name: 'onDropdownVisibleChange',
    event: 'onDropdownVisibleChange',
    descriptions: '下拉框出现/隐藏时触发',
  },
  {
    name: 'onTreeExpand',
    event: 'onTreeExpand',
    descriptions: '展示节点时调用',
  },
  ...DEFAULT_EVENT_LIST,
];
