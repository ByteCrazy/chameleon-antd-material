import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Card',
    snapshotText: 'ACD',
    description: 'antd 卡片',
    schema: {
      props: {
        title: '卡片标题',
        bordered: true,
        size: 'default',
      },
      children: ['卡片内容'],
    },
  },
];
