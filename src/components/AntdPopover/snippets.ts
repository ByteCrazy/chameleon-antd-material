import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Popover',
    snapshotText: 'APO',
    description: 'antd 气泡卡片',
    schema: {
      props: {
        title: '气泡标题',
        content: '气泡内容',
        placement: 'top',
      },
      children: ['触发元素'],
    },
  },
];
