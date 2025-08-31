import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'activeKey',
    title: 'activeKey',
    valueType: 'array',
    setters: ['ArraySetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultActiveKey',
    title: 'defaultActiveKey',
    valueType: 'array',
    setters: ['ArraySetter'],
  },
  {
    name: 'accordion',
    title: 'accordion',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'collapsible',
    title: 'collapsible',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'header', value: 'header' },
            { label: 'icon', value: 'icon' },
            { label: 'disabled', value: 'disabled' },
          ],
        },
      },
    ],
  },
  {
    name: 'destroyInactivePanel',
    title: 'destroyInactivePanel',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'expandIcon',
    title: 'expandIcon',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'expandIconPosition',
    title: 'expandIconPosition',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'start', value: 'start' },
            { label: 'end', value: 'end' },
          ],
        },
      },
    ],
  },
  {
    name: 'ghost',
    title: 'ghost',
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
            { label: 'large', value: 'large' },
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ],
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
