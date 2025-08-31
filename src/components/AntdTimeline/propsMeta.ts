import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'mode',
    title: 'mode',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'left', value: 'left' },
            { label: 'alternate', value: 'alternate' },
            { label: 'right', value: 'right' },
          ],
        },
      },
    ],
  },
  {
    name: 'pending',
    title: 'pending',
    valueType: 'string',
    setters: ['StringSetter', 'BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'pendingDot',
    title: 'pendingDot',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'reverse',
    title: 'reverse',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
