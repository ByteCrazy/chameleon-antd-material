import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Descriptions',
    snapshotText: 'ADS',
    description: 'antd 描述列表',
    schema: {
      props: {
        title: '用户信息',
        bordered: true,
        column: 3,
      },
      children: ['描述项内容'],
    },
  },
];
