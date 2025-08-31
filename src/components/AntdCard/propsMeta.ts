import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'actions',
    title: 'actions',
    valueType: 'array',
    setters: ['ArraySetter', 'ExpressionSetter'],
  },
  {
    name: 'activeTabKey',
    title: 'activeTabKey',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'bodyStyle',
    title: 'bodyStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'cover',
    title: 'cover',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultActiveTabKey',
    title: 'defaultActiveTabKey',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'extra',
    title: 'extra',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'headStyle',
    title: 'headStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'hoverable',
    title: 'hoverable',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'loading',
    title: 'loading',
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
    name: 'tabList',
    title: 'tabList',
    valueType: 'array',
    setters: ['ArraySetter', 'JSONSetter'],
  },
  {
    name: 'tabBarExtraContent',
    title: 'tabBarExtraContent',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'tabProps',
    title: 'tabProps',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'type',
    title: 'type',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [{ label: 'inner', value: 'inner' }],
        },
      },
    ],
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
