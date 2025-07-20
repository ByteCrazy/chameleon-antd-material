import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'maxLength',
    title: 'maxLength',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'minLength',
    title: 'minLength',
    valueType: 'number',
    setters: ['NumberSetter'],
  },

  {
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'readOnly',
    title: 'readOnly',
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
    name: 'autoFocus',
    title: 'autoFocus',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },

  {
    name: 'stringMode',
    title: 'stringMode',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'changeOnWheel',
    title: 'changeOnWheel',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'keyboard',
    title: 'keyboard',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'parser',
    title: 'parser',
    valueType: 'function',
    setters: ['FunctionSetter'],
  },
  {
    name: 'decimalSeparator',
    title: 'decimalSeparator',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'changeOnBlur',
    title: 'changeOnBlur',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'alt',
    title: 'alt',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'autoComplete',
    title: 'autoComplete',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: '',
              value: '',
            },
            {
              label: 'off',
              value: 'off',
            },
            {
              label: 'on',
              value: 'on',
            },
          ],
        },
      },
      'StringSetter',
      'TextAreaSetter',
    ],
  },
  {
    name: 'capture',
    title: 'capture',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'StringSetter', 'TextAreaSetter'],
  },

  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
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
              label: 'small',
              value: 'small',
            },
            {
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'large',
              value: 'large',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
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
            {
              label: 'warning',
              value: 'warning',
            },
            {
              label: 'error',
              value: 'error',
            },
            {
              label: '',
              value: '',
            },
          ],
        },
      },
      'ExpressionSetter',
    ],
  },
];
