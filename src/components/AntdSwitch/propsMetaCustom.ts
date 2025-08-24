import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'checked',
    title: 'checked',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
  },
];
