import { CMaterialType, SetterTypeEnum } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter', 'ExpressionSetter'],
  },
];
