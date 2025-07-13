import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  'onValuesChange',
  {
    event: 'onFinish',
    name: 'onFinish',
    params: [
      {
        name: 'event',
        tsType: 'any',
      },
    ],
    template: `function onFinish(values) {
      console.log(values);
    }`,
  },
  ...DEFAULT_EVENT_LIST,
];
