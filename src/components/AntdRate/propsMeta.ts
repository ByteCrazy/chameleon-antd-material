import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'value',
    title: 'value',
    valueType: 'number',
    setters: ['NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'count',
    title: 'count',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'allowHalf',
    title: 'allowHalf',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'allowClear',
    title: 'allowClear',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'character',
    title: 'character',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'tooltips',
    title: 'tooltips',
    valueType: 'array',
    setters: ['ArraySetter'],
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
