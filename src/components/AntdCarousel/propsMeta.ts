import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'afterChange',
    title: 'afterChange',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'autoplay',
    title: 'autoplay',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'beforeChange',
    title: 'beforeChange',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'dotPosition',
    title: 'dotPosition',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'top', value: 'top' },
            { label: 'bottom', value: 'bottom' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
          ],
        },
      },
    ],
  },
  {
    name: 'dots',
    title: 'dots',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'easing',
    title: 'easing',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'effect',
    title: 'effect',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'scrollx', value: 'scrollx' },
            { label: 'fade', value: 'fade' },
          ],
        },
      },
    ],
  },
  {
    name: 'infinite',
    title: 'infinite',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'pauseOnHover',
    title: 'pauseOnHover',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'speed',
    title: 'speed',
    valueType: 'number',
    setters: ['NumberSetter'],
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
