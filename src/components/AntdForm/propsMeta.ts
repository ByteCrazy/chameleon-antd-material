import { CMaterialType, SetterType } from '@chamn/model';

export const labelColMeta: SetterType<any> = {
  componentName: 'ShapeSetter',
  initialValue: {},
  props: {
    elements: [
      {
        name: 'span',
        title: 'span',
        valueType: 'number',
        setters: ['NumberSetter'],
      },
      {
        name: 'offset',
        title: 'offset',
        valueType: 'number',
        setters: ['NumberSetter'],
      },
    ],
  },
};

export const propMeta: CMaterialType['props'] = [
  {
    name: 'initialValues',
    title: 'initialValues',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'layout',
    title: 'layout',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'horizontal',
              value: 'horizontal',
            },
            {
              label: 'inline',
              value: 'inline',
            },
            {
              label: 'vertical',
              value: 'vertical',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'labelAlign',
    title: 'label align',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'left',
              value: 'left',
            },
            {
              label: 'right',
              value: 'right',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'labelWrap',
    title: 'label wrap',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },

  {
    name: 'variant',
    title: {
      label: 'variant',
      tip: '表单内控件变体',
    },
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'outlined',
              value: 'outlined',
            },
            {
              label: 'borderless',
              value: 'borderless',
            },
            {
              label: 'filled',
              value: 'filled',
            },
            {
              label: 'underlined',
              value: 'underlined',
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
    name: 'labelCol',
    title: 'labelCol',
    valueType: 'object',
    setters: [labelColMeta, 'JSONSetter'],
  },
  {
    name: 'requiredMark',
    title: 'requiredMark',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'scrollToFirstError',
    title: {
      label: 'ST First Error',
      tip: 'scroll To First Error',
    },
    valueType: 'object',
    setters: ['BooleanSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
];
