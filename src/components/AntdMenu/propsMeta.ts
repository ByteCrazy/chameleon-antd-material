import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'items',
    title: 'items',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'mode',
    title: 'mode',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'vertical', value: 'vertical' },
            { label: 'horizontal', value: 'horizontal' },
            { label: 'inline', value: 'inline' },
          ],
        },
      },
    ],
  },
  {
    name: 'theme',
    title: 'theme',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'light', value: 'light' },
            { label: 'dark', value: 'dark' },
          ],
        },
      },
    ],
  },
  {
    name: 'selectedKeys',
    title: 'selectedKeys',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultSelectedKeys',
    title: 'defaultSelectedKeys',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'openKeys',
    title: 'openKeys',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultOpenKeys',
    title: 'defaultOpenKeys',
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
    name: 'selectable',
    title: 'selectable',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'inlineCollapsed',
    title: 'inlineCollapsed',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'inlineIndent',
    title: 'inlineIndent',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'subMenuCloseDelay',
    title: 'subMenuCloseDelay',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'subMenuOpenDelay',
    title: 'subMenuOpenDelay',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'forceSubMenuRender',
    title: 'forceSubMenuRender',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'triggerSubMenuAction',
    title: 'triggerSubMenuAction',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'hover', value: 'hover' },
            { label: 'click', value: 'click' },
          ],
        },
      },
    ],
  },
  {
    name: 'overflowedIndicator',
    title: 'overflowedIndicator',
    valueType: 'string',
    setters: ['StringSetter', 'NumberSetter', 'BooleanSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
