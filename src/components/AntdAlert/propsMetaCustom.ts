import { CMaterialType } from '@chamn/model';
import { isContainerMeta } from '../../commonMeta';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'content',
    title: 'content',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  ...isContainerMeta,
];
