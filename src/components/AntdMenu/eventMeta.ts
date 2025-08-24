import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onClick',
    event: 'onClick',
    descriptions: '点击菜单项时触发',
  },
  {
    name: 'onSelect',
    event: 'onSelect',
    descriptions: '选中菜单项时触发',
  },
  {
    name: 'onDeselect',
    event: 'onDeselect',
    descriptions: '取消选中菜单项时触发',
  },
  {
    name: 'onOpenChange',
    event: 'onOpenChange',
    descriptions: '子菜单展开/收起时触发',
  },
  ...DEFAULT_EVENT_LIST,
];
