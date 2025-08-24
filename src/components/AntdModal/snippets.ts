import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Modal',
    snapshotText: 'AMD',
    description: 'antd 模态框',
    schema: {
      props: {
        title: '模态框标题',
        open: true,
        width: 520,
      },
      children: ['模态框内容'],
    },
  },
];
