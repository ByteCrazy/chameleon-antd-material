import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'colon',
    title: 'colon',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'column',
    title: 'column',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'contentStyle',
    title: 'contentStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'extra',
    title: 'extra',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'labelStyle',
    title: 'labelStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'layout',
    title: 'layout',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'horizontal', value: 'horizontal' },
            { label: 'vertical', value: 'vertical' },
          ],
        },
      },
    ],
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
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ],
        },
      },
    ],
  },
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
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
