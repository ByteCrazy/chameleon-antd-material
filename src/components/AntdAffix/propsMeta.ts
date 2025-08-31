import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'offsetTop',
    title: 'offsetTop',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'offsetBottom',
    title: 'offsetBottom',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'target',
    title: 'target',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'affixStyle',
    title: 'affixStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
