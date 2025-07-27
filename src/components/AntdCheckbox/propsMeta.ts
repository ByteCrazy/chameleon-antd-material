import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'checked',
    title: 'checked',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'label',
    title: 'label',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'autoFocus',
    title: 'autoFocus',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'type',
    title: 'type',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
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
    name: 'indeterminate',
    title: 'indeterminate',
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
