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
            {
              label: 'multiple',
              value: 'multiple',
            },
            {
              label: 'tags',
              value: 'tags',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
    name: 'searchValue',
    title: 'searchValue',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'showSearch',
    title: 'showSearch',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'small',
              value: 'small',
            },
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
    name: 'autoClearSearchValue',
    title: 'autoClearSearchValue',
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
    name: 'defaultOpen',
    title: 'defaultOpen',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },

  {
    name: 'filterSort',
    title: 'filterSort',
    valueType: 'object',
    setters: ['FunctionSetter'],
  },
  {
    name: 'labelInValue',
    title: 'labelInValue',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'loading',
    title: 'loading',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'maxCount',
    title: 'maxCount',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'maxTagCount',
    title: 'maxTagCount',
    valueType: 'number',
    setters: ['NumberSetter', 'StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'maxTagTextLength',
    title: 'maxTagTextLength',
    valueType: 'number',
    setters: ['NumberSetter'],
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
              label: 'error',
              value: 'error',
            },
            {
              label: 'warning',
              value: 'warning',
            },
          ],
        },
      },
      'ExpressionSetter',
    ],
  },
  {
    name: 'tokenSeparators',
    title: {
      label: 'tokenSeparators',
      tip: '自动分词的分隔符，仅在 mode="tags" 时生效',
    },
    valueType: 'array',
    setters: [
      {
        componentName: 'ArraySetter',
        initialValue: [],
        props: {
          item: {
            initialValue: '',
            setters: ['StringSetter'],
          },
        },
      },
    ],
  },
  {
    name: 'virtual',
    title: 'virtual',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
];
