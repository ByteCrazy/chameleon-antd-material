import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'decimalSeparator',
    title: 'decimalSeparator',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'formatter',
    title: 'formatter',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'groupSeparator',
    title: 'groupSeparator',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'loading',
    title: 'loading',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'precision',
    title: 'precision',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'prefix',
    title: 'prefix',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'suffix',
    title: 'suffix',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'valueStyle',
    title: 'valueStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
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
