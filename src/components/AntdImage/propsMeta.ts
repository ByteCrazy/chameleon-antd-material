import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'alt',
    title: 'alt',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'fallback',
    title: 'fallback',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'height',
    title: 'height',
    valueType: 'string',
    setters: ['StringSetter', 'NumberSetter'],
  },
  {
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'preview',
    title: 'preview',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'JSONSetter'],
  },
  {
    name: 'src',
    title: 'src',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'width',
    title: 'width',
    valueType: 'string',
    setters: ['StringSetter', 'NumberSetter'],
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
