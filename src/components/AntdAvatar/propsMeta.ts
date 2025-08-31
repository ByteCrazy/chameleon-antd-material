import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'alt',
    title: 'alt',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'gap',
    title: 'gap',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'icon',
    title: 'icon',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'shape',
    title: 'shape',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'circle', value: 'circle' },
            { label: 'square', value: 'square' },
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
            { label: 'large', value: 'large' },
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ],
        },
      },
      'NumberSetter',
    ],
  },
  {
    name: 'src',
    title: 'src',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'srcSet',
    title: 'srcSet',
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
