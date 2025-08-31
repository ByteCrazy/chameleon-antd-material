import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Tree',
    snapshotText: 'ATR',
    description: 'antd 树形控件',
    schema: {
      props: {
        checkable: false,
        defaultExpandAll: false,
        treeData: [
          {
            title: '父节点1',
            key: '0-0',
            children: [
              {
                title: '子节点1',
                key: '0-0-0',
              },
              {
                title: '子节点2',
                key: '0-0-1',
              },
            ],
          },
          {
            title: '父节点2',
            key: '0-1',
          },
        ],
      },
    },
  },
];
