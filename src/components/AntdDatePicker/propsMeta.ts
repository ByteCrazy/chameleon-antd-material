import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'multiple',
    title: 'multiple',
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
    name: 'showNow',
    title: 'showNow',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showTime',
    title: 'showTime',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'defaultOpen',
    title: 'defaultOpen',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'minDate',
    title: 'minDate',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'maxDate',
    title: 'maxDate',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'picker',
    title: 'picker',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'date',
              value: 'date',
            },
            {
              label: 'week',
              value: 'week',
            },
            {
              label: 'month',
              value: 'month',
            },
            {
              label: 'quarter',
              value: 'quarter',
            },
            {
              label: 'year',
              value: 'year',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'placement',
    title: 'placement',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'bottomLeft',
              value: 'bottomLeft',
            },
            {
              label: 'bottomRight',
              value: 'bottomRight',
            },
            {
              label: 'topLeft',
              value: 'topLeft',
            },
            {
              label: 'topRight',
              value: 'topRight',
            },
          ],
        },
      },
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
            {
              label: 'large',
              value: 'large',
            },
            {
              label: 'small',
              value: 'small',
            },
            {
              label: 'middle',
              value: 'middle',
            },
          ],
        },
      },
    ],
  },
];
