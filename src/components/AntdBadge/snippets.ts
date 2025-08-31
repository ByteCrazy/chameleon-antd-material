import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Badge',
    snapshotText: 'ABG',
    description: 'antd 徽标数',
    schema: {
      props: {
        count: 5,
        showZero: false,
        dot: false,
      },
      children: ['徽标内容'],
    },
  },
];
