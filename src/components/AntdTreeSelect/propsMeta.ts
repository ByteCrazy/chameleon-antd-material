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
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'treeData',
    title: 'treeData',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
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
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showSearch',
    title: 'showSearch',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'searchPlaceholder',
    title: 'searchPlaceholder',
    valueType: 'string',
    setters: ['StringSetter'],
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
    name: 'treeCheckable',
    title: 'treeCheckable',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'treeDefaultExpandAll',
    title: 'treeDefaultExpandAll',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'treeDefaultExpandedKeys',
    title: 'treeDefaultExpandedKeys',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'treeLine',
    title: 'treeLine',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'treeNodeFilterProp',
    title: 'treeNodeFilterProp',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'treeNodeLabelProp',
    title: 'treeNodeLabelProp',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'showCheckedStrategy',
    title: 'showCheckedStrategy',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'SHOW_ALL', value: 'SHOW_ALL' },
            { label: 'SHOW_PARENT', value: 'SHOW_PARENT' },
            { label: 'SHOW_CHILD', value: 'SHOW_CHILD' },
          ],
        },
      },
    ],
  },
  {
    name: 'maxTagCount',
    title: 'maxTagCount',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'bordered',
    title: 'bordered',
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
