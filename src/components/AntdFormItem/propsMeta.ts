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
    setters: ['ArraySetter'],
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
