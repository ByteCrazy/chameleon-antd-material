import { MaterialPropType } from '@chamn/model';
export const tooltipPropsMeta: MaterialPropType<''>[] = [
  {
    name: 'placement',
    title: 'placement',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'top', value: 'top' },
            { label: 'left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'bottom', value: 'bottom' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'topRight', value: 'topRight' },
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'leftTop', value: 'leftTop' },
            { label: 'leftBottom', value: 'leftBottom' },
            { label: 'rightTop', value: 'rightTop' },
            { label: 'rightBottom', value: 'rightBottom' },
          ],
        },
      },
    ],
  },
  {
    name: 'trigger',
    title: 'trigger',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'hover', value: 'hover' },
            { label: 'focus', value: 'focus' },
            { label: 'click', value: 'click' },
            { label: 'contextMenu', value: 'contextMenu' },
          ],
        },
      },
    ],
  },
  {
    name: 'autoAdjustOverflow',
    title: 'autoAdjustOverflow',
    description: '气泡被遮挡时自动调整位置',
    valueType: 'string',
    setters: ['BooleanSetter'],
  },
  {
    name: 'defaultOpen',
    title: 'defaultOpen',
    description: '默认是否显隐',
    valueType: 'string',
    setters: ['BooleanSetter'],
  },
  {
    name: 'destroyOnHidden',
    title: 'destroyOnHidden',
    description: '关闭后是否销毁 dom',
    valueType: 'string',
    setters: ['BooleanSetter'],
  },
  {
    name: 'color',
    title: '背景颜色',
    valueType: 'string',
    setters: ['ColorSetter', 'StringSetter'],
  },
  {
    name: 'zIndex',
    title: '展示层级',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'mouseEnterDelay',
    title: 'mouseEnterDelay',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'mouseLeaveDelay',
    title: 'mouseLeaveDelay',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'onOpenChange',
    title: 'onOpenChange',
    valueType: 'function',
    setters: ['FunctionSetter', 'ActionFlowSetter'],
  },
];
