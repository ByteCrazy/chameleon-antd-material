import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'color',
    title: 'color',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'count',
    title: 'count',
    valueType: 'string',
    setters: ['StringSetter', 'NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'dot',
    title: 'dot',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'offset',
    title: 'offset',
    valueType: 'array',
    setters: ['ArraySetter'],
  },
  {
    name: 'overflowCount',
    title: 'overflowCount',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'showZero',
    title: 'showZero',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'size',
    title: 'size',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'default', value: 'default' },
            { label: 'small', value: 'small' },
          ],
        },
      },
    ],
  },
  {
    name: 'status',
    title: 'status',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'success', value: 'success' },
            { label: 'processing', value: 'processing' },
            { label: 'default', value: 'default' },
            { label: 'error', value: 'error' },
            { label: 'warning', value: 'warning' },
          ],
        },
      },
    ],
  },
  {
    name: 'text',
    title: 'text',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'style',
    title: 'style',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'className',
    title: 'className',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
