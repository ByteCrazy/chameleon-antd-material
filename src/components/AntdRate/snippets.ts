import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Rate',
    snapshotText: 'ART',
    description: 'antd 评分',
    schema: {
      props: {
        defaultValue: 3,
        count: 5,
        allowHalf: false,
      },
    },
  },
];
