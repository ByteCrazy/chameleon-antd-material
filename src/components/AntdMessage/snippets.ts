import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Message',
    snapshotText: 'AMS',
    description: 'antd 全局提示',
    schema: {
      props: {
        content: '这是一条消息提示',
        type: 'info',
        duration: 3,
      },
    },
  },
];
