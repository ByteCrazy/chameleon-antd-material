import { CMaterialType } from '@chamn/model';
import { labelColMeta } from '../AntdForm/propsMeta';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'name',
    title: {
      label: 'name',
      tip: '字段名，支持数组, ["a", "b"]',
    },
    valueType: 'string',
    setters: ['StringSetter', 'ArraySetter'],
  },
  {
    name: 'label',
    title: 'label',
    valueType: 'string',
    setters: ['StringSetter'],
  },

  {
    name: 'labelAlign',
    title: 'labelAlign',
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
    name: 'labelCol',
    title: 'labelCol',
    valueType: 'object',
    setters: [labelColMeta, 'JSONSetter'],
  },
  {
    name: 'initialValue',
    title: 'initialValue',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },

  {
    name: 'required',
    title: 'required',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'valuePropName',
    title: {
      label: 'valuePropName',
      tip: '子节点的值的属性。注意：Switch、Checkbox、Radio 的 valuePropName 应该是 checked，否则无法获取这个两个组件的值。该属性为 getValueProps 的封装，自定义 getValueProps 后会失效',
    },
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'getValueFromEvent',
    title: {
      label: 'getValueFromEvent',
      tip: '设置如何将 event 的值转换成字段值',
    },
    valueType: 'string',
    setters: ['FunctionSetter'],
  },

  {
    name: 'rules',
    title: 'rules',
    valueType: 'array',
    setters: [
      {
        componentName: 'ArraySetter',
        initialValue: [],
        props: {
          item: {
            initialValue: '',
            setters: [
              {
                componentName: 'ShapeSetter',
                initialValue: {},
                props: {
                  elements: [
                    {
                      name: 'required',
                      title: 'required',
                      valueType: 'boolean',
                      setters: ['BooleanSetter'],
                    },
                    {
                      name: 'message',
                      title: 'message',
                      valueType: 'string',
                      setters: ['TextAreaSetter'],
                    },
                    {
                      name: 'type',
                      title: 'type',
                      valueType: 'string',
                      setters: [
                        {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              { label: 'string', value: 'string' },
                              { label: 'number', value: 'number' },
                              { label: 'boolean', value: 'boolean' },
                              { label: 'method', value: 'method' },
                              { label: 'regexp', value: 'regexp' },
                              { label: 'integer', value: 'integer' },
                              { label: 'float', value: 'float' },
                              { label: 'array', value: 'array' },
                              { label: 'object', value: 'object' },
                              { label: 'enum', value: 'enum' },
                              { label: 'date', value: 'date' },
                              { label: 'url', value: 'url' },
                              { label: 'hex', value: 'hex' },
                              { label: 'email', value: 'email' },
                              { label: 'any', value: 'any' },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      name: 'len',
                      title: {
                        label: 'len',
                        tip: 'string 类型时为字符串长度；number 类型时为确定数字； array 类型时为数组长度',
                      },
                      valueType: 'number',
                      setters: ['NumberSetter'],
                    },
                    {
                      name: 'max',
                      title: {
                        label: 'max',
                        tip: '必须设置 type：string 类型为字符串最大长度；number 类型时为最大值；array 类型时为数组最大长度',
                      },
                      valueType: 'number',
                      setters: ['NumberSetter'],
                    },
                    {
                      name: 'min',
                      title: {
                        label: 'min',
                        tip: '必须设置 type：string 类型为字符串最小长度；number 类型时为最小值；array 类型时为数组最小长度',
                      },
                      valueType: 'number',
                      setters: ['NumberSetter'],
                    },
                    {
                      name: 'pattern',
                      title: 'pattern',
                      valueType: 'string',
                      setters: ['TextAreaSetter'],
                    },
                    {
                      name: 'transform',
                      title: 'transform',
                      valueType: 'function',
                      setters: ['FunctionSetter'],
                    },
                    {
                      name: 'validator',
                      title: 'validator',
                      valueType: 'function',
                      setters: ['FunctionSetter'],
                    },
                    {
                      name: 'warningOnly',
                      title: 'warningOnly',
                      valueType: 'boolean',
                      setters: ['BooleanSetter'],
                    },
                    {
                      name: 'whitespace',
                      title: {
                        label: 'whitespace',
                        tip: '如果字段仅包含空格则校验不通过，只在 type: string 时生效	',
                      },
                      valueType: 'boolean',
                      setters: ['BooleanSetter'],
                    },
                  ],
                },
              },
            ],
          },
        },
      },
    ],
  },
  {
    name: 'tooltip',
    title: 'tooltip',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'preserve',
    title: {
      label: 'preserve',
      tip: '当字段被删除时保留字段值	',
    },
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'dependencies	',
    title: {
      label: 'dependencies',
      tip: '可以通过 dependencies 属性，设置关联字段。当关联字段的值发生变化时，会触发校验与更新',
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
    name: 'colon',
    title: 'colon',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'extra',
    title: 'extra',
    valueType: 'string',
    setters: ['TextAreaSetter'],
  },
  {
    name: 'hidden',
    title: { label: 'hidden', tip: '是否隐藏字段（依然会收集和校验字段' },
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },

  {
    name: 'noStyle',
    title: 'noStyle',
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
