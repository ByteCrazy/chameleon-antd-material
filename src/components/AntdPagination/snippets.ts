import { SnippetsType } from '@chamn/model';

export const snippets: SnippetsType[] = [
  {
    title: 'Antd Pagination',
    snapshotText: 'APG',
    description: 'antd 分页组件',
    schema: {
      props: {
        current: 1,
        total: 50,
        pageSize: 10,
        showSizeChanger: true,
        showQuickJumper: true,
      },
    },
  },
];
