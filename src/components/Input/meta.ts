import { CMaterialType } from '@chamn/model';
import { snippets } from './snippets';

export const InputMeta: CMaterialType = {
  componentName: 'Input',
  title: '输入框',
  props: [
    {
      name: 'addonAfter',
      title: '后置标签',
      valueType: 'string',
      setter: [''],
    },
    {
      name: 'addonBefore',
      title: '前置标签',
      valueType: 'string',
      setter: 'string',
    },
    {
      name: 'allowClear',
      title: '可清除',
      valueType: 'boolean',
      setter: 'boolean',
      defaultValue: false,
    },
    {
      name: 'bordered',
      title: '是否有边框',
      valueType: 'boolean',
      setter: 'boolean',
      defaultValue: true,
    },
    {
      name: 'defaultValue',
      title: '默认值',
      valueType: 'string',
      setter: 'string',
    },
    {
      name: 'placeholder',
      title: '占位提示',
      valueType: 'string',
      setter: 'string',
    },
    {
      name: 'size',
      title: '尺寸',
      valueType: 'string',
      setter: {
        type: 'select',
        props: {
          options: [
            { label: '大', value: 'large' },
            { label: '中', value: 'middle' },
            { label: '小', value: 'small' },
          ],
        },
      },
      defaultValue: 'middle',
    },
    {
      name: 'status',
      title: '状态',
      valueType: 'string',
      setter: {
        type: 'select',
        props: {
          options: [
            { label: '错误', value: 'error' },
            { label: '警告', value: 'warning' },
          ],
        },
      },
    },
    {
      name: 'type',
      title: '类型',
      valueType: 'string',
      setter: {
        type: 'select',
        props: {
          options: [
            { label: '文本', value: 'text' },
            { label: '密码', value: 'password' },
            { label: '数字', value: 'number' },
          ],
        },
      },
      defaultValue: 'text',
    },
    {
      name: 'value',
      title: '输入值',
      valueType: 'string',
      setter: 'string',
    },
    {
      name: 'onChange',
      title: '输入改变时的回调',
      valueType: 'function',
      setter: 'function',
    },
    {
      name: 'onPressEnter',
      title: '按下回车的回调',
      valueType: 'function',
      setter: 'function',
    },
    {
      name: 'onFocus',
      title: '获取焦点时的回调',
      type: 'single',
      valueType: 'function',
      setter: 'function',
    },
    {
      name: 'onBlur',
      title: '失去焦点时的回调',
      valueType: 'function',
      setter: 'function',
    },
  ],
  npm: {
    name: 'Input',
    package: __PACKAGE_NAME__ || '',
    version: __PACKAGE_VERSION__,
    destructuring: true,
    exportName: 'Input',
  },
  snippets: snippets,
};

export default [InputMeta];
