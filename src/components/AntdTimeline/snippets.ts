import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Timeline',
    snapshotText: 'ATL',
    description: 'antd 时间轴',
    schema: {
      props: {
        mode: 'left',
      },
      children: ['时间轴项目'],
    },
  },
];
