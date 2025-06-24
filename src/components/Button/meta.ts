import { CMaterialType, SetterTypeEnum } from '@chamn/model';
import { snippets } from './snippets';

export const ButtonMeta: CMaterialType = {
  title: '按钮',
  props: [
    {
      name: 'type',
      title: { label: '按钮类型', tip: '设置按钮的样式类型' },
      valueType: PropsValueType.ENUMS,
      defaultValue: 'default',
      setters: [
        {
          type: SetterType.SELECT,
          options: ['default', 'primary', 'dashed', 'text', 'link'],
        },
      ],
    },
    {
      name: 'disabled',
      title: { label: '禁用', tip: '是否禁用按钮' },
      valueType: PropsValueType.BOOLEAN,
      defaultValue: false,
      setters: [{ type: SetterType.SWITCH }],
    },
    {
      name: 'loading',
      title: { label: '加载中', tip: '按钮是否处于加载状态' },
      valueType: PropsValueType.BOOLEAN,
      defaultValue: false,
      setters: [{ type: SetterType.SWITCH }],
    },
    {
      name: 'shape',
      title: { label: '按钮形状', tip: '可选按钮的形状' },
      valueType: PropsValueType.ENUMS,
      defaultValue: 'default',
      setters: [
        {
          type: SetterType.SELECT,
          options: ['default', 'circle', 'round'],
        },
      ],
    },
    {
      name: 'size',
      title: { label: '尺寸', tip: '按钮的大小' },
      valueType: PropsValueType.ENUMS,
      defaultValue: 'middle',
      setters: [
        {
          type: SetterType.SELECT,
          options: ['small', 'middle', 'large'],
        },
      ],
    },
    {
      name: 'icon',
      title: { label: '图标', tip: '按钮的图标' },
      valueType: PropsValueType.COMPONENT,
      setters: [{ type: SetterType.ICON_PICKER }],
    },
  ],
  events: ['onClick', 'onMouseEnter', 'onMouseLeave'],
  snippets: [
    {
      title: '默认按钮',
      schema: {
        componentName: 'Button',
        props: {
          type: 'default',
          children: '按钮',
        },
      },
    },
    {
      title: '主要按钮',
      schema: {
        componentName: 'Button',
        props: {
          type: 'primary',
          children: '按钮',
        },
      },
    },
  ],
  npm: {
    name: 'Button',
    package: __PACKAGE_NAME__ || '',
    version: __PACKAGE_VERSION__,
    destructuring: true,
    exportName: 'Button',
  },
};

export default [ButtonMeta];

export type A = string;
