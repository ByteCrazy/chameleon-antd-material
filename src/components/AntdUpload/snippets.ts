import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Upload',
    snapshotText: 'AUP',
    description: 'antd 上传组件',
    schema: {
      props: {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'text',
        multiple: false,
      },
      children: ['上传'],
    },
  },
];
