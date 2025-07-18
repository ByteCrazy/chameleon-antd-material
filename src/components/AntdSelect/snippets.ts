import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'AntdSelect',
    snapshotText: 'Select',
    description: '下拉选择',
    schema: {
      style: [
        {
          property: 'width',
          value: '200px',
        },
      ],
      props: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
  },
];
