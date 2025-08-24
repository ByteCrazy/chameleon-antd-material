import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
  },
  {
    name: 'placement',
    title: 'placement',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'top', value: 'top' },
            { label: 'right', value: 'right' },
            { label: 'bottom', value: 'bottom' },
            { label: 'left', value: 'left' },
          ],
        },
      },
    ],
  },
  {
    name: 'width',
    title: 'width',
    valueType: 'number',
    setters: ['NumberSetter', 'StringSetter'],
  },
  {
    name: 'height',
    title: 'height',
    valueType: 'number',
    setters: ['NumberSetter', 'StringSetter'],
  },
  {
    name: 'closable',
    title: 'closable',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
  {
    name: 'destroyOnClose',
    title: 'destroyOnClose',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'footer',
    title: 'footer',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
  },
  {
    name: 'forceRender',
    title: 'forceRender',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'getContainer',
    title: 'getContainer',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'keyboard',
    title: 'keyboard',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'mask',
    title: 'mask',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'maskClosable',
    title: 'maskClosable',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'maskStyle',
    title: 'maskStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'bodyStyle',
    title: 'bodyStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'headerStyle',
    title: 'headerStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'footerStyle',
    title: 'footerStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'zIndex',
    title: 'zIndex',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'push',
    title: 'push',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'distance',
              title: 'distance',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
