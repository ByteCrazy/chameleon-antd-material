import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Alert',
    snapshotText: 'AAL',
    description: 'antd 警告提示',
    schema: {
      props: {
        content: '这是一条警告提示',
        type: 'warning',
        showIcon: true,
      },
    },
  },
];
