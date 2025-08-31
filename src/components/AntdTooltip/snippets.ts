import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Tooltip',
    snapshotText: 'ATP',
    description: 'antd 文字提示',
    schema: {
      props: {
        title: '提示文字',
        placement: 'top',
        color: '#000000',
      },
      children: ['触发元素'],
    },
  },
];
