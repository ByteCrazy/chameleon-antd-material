import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'AntdCheckboxGroup',
    snapshotText: 'CBoxs',
    description: '多选框组',
    schema: {
      props: {
        options: [
          {
            label: 'A',
            value: 'A',
          },
          {
            label: 'B',
            value: 'B',
            disable: true,
          },
        ],
      },
    },
  },
];
