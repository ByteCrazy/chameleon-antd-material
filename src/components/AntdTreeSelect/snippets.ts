import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd TreeSelect',
    snapshotText: 'ATS',
    description: 'antd 树选择器',
    schema: {
      props: {
        placeholder: '请选择',
        style: { width: '100%' },
        treeData: [
          {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
              {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
              },
            ],
          },
          {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
          },
        ],
      },
    },
  },
];
