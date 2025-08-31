import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Carousel',
    snapshotText: 'ACR',
    description: 'antd 走马灯',
    schema: {
      props: {
        autoplay: true,
        dots: true,
        effect: 'scrollx',
      },
      children: ['轮播内容1', '轮播内容2', '轮播内容3'],
    },
  },
];
