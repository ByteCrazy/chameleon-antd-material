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
    name: 'centered',
    title: 'centered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
    name: 'confirmLoading',
    title: 'confirmLoading',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
      'JSONSetter',
    ],
  },
  {
    name: 'forceRender',
    title: 'forceRender',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
    name: 'okText',
    title: 'okText',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'okType',
    title: 'okType',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'primary', value: 'primary' },
            { label: 'default', value: 'default' },
            { label: 'dashed', value: 'dashed' },
            { label: 'link', value: 'link' },
            { label: 'text', value: 'text' },
          ],
        },
      },
    ],
  },
  {
    name: 'okButtonProps',
    title: 'okButtonProps',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'cancelText',
    title: 'cancelText',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'cancelButtonProps',
    title: 'cancelButtonProps',
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
    name: 'bodyStyle',
    title: 'bodyStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'modalRender',
    title: 'modalRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'getContainer',
    title: 'getContainer',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'wrapClassName',
    title: 'wrapClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
