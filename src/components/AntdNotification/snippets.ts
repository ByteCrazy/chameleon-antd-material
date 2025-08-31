import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Notification',
    snapshotText: 'ANT',
    description: 'antd 通知提醒',
    schema: {
      props: {
        message: '通知提醒标题',
        description: '通知提醒内容',
        type: 'info',
        duration: 4.5,
      },
    },
  },
];
