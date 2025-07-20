import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'text',
    title: 'text',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'checked',
    title: 'checked',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'autoFocus',
    title: 'autoFocus',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'skipGroup',
    title: 'skipGroup',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'required',
    title: 'required',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
];
