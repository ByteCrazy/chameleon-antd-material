import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Dropdown',
    snapshotText: 'ADP',
    description: 'antd 下拉菜单',
    schema: {
      props: {
        menu: {
          items: [
            {
              key: '1',
              label: '菜单项1',
            },
            {
              key: '2',
              label: '菜单项2',
            },
            {
              type: 'divider',
            },
            {
              key: '3',
              label: '菜单项3',
            },
          ],
        },
      },
      children: ['下拉按钮'],
    },
  },
];
