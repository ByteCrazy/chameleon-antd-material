import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Collapse',
    snapshotText: 'ACL',
    description: 'antd 折叠面板',
    schema: {
      props: {
        defaultActiveKey: ['1'],
        accordion: false,
      },
      children: ['折叠面板内容'],
    },
  },
];
