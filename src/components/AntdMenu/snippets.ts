import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Menu',
    snapshotText: 'AMN',
    description: 'antd 导航菜单',
    schema: {
      props: {
        mode: 'horizontal',
        items: [
          {
            key: 'home',
            label: '首页',
          },
          {
            key: 'about',
            label: '关于',
          },
          {
            key: 'sub1',
            label: '子菜单',
            children: [
              {
                key: 'option1',
                label: '选项1',
              },
              {
                key: 'option2',
                label: '选项2',
              },
            ],
          },
        ],
      },
    },
  },
];
