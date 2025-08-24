import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'object',
    setters: ['ExpressionSetter'],
  },
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'object',
    setters: ['ExpressionSetter'],
  },
  {
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'format',
    title: 'format',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'HH:mm:ss', value: 'HH:mm:ss' },
            { label: 'HH:mm', value: 'HH:mm' },
            { label: 'mm:ss', value: 'mm:ss' },
            { label: 'HH', value: 'HH' },
          ],
        },
      },
      'StringSetter',
    ],
  },
  {
    name: 'size',
    title: 'size',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'large', value: 'large' },
            { label: 'middle', value: 'middle' },
            { label: 'small', value: 'small' },
          ],
        },
      },
    ],
  },
  {
    name: 'allowClear',
    title: 'allowClear',
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
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'hourStep',
    title: 'hourStep',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'minuteStep',
    title: 'minuteStep',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'secondStep',
    title: 'secondStep',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'use12Hours',
    title: 'use12Hours',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showNow',
    title: 'showNow',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'status',
    title: 'status',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'error', value: 'error' },
            { label: 'warning', value: 'warning' },
          ],
        },
      },
    ],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
];
