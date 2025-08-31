import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'message',
    title: 'message',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'description',
    title: 'description',
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
          options: [
            { label: 'success', value: 'success' },
            { label: 'info', value: 'info' },
            { label: 'warning', value: 'warning' },
            { label: 'error', value: 'error' },
          ],
        },
      },
    ],
  },
  {
    name: 'duration',
    title: 'duration',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'icon',
    title: 'icon',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
  },
  {
    name: 'key',
    title: 'key',
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
  {
    name: 'btn',
    title: 'btn',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'closeIcon',
    title: 'closeIcon',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
  },
];
