import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Image',
    snapshotText: 'AIM',
    description: 'antd 图片',
    schema: {
      props: {
        width: 200,
        src: 'https://via.placeholder.com/200x200',
        alt: '图片',
      },
    },
  },
];
