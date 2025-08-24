import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Drawer',
    snapshotText: 'ADR',
    description: 'antd 抽屉组件',
    schema: {
      props: {
        title: '抽屉标题',
        placement: 'right',
        open: true,
        width: 400,
      },
      children: ['抽屉内容'],
    },
  },
];
