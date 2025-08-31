import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'title',
    title: 'title',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
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
            { label: 'top', value: 'top' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'topRight', value: 'topRight' },
            { label: 'left', value: 'left' },
            { label: 'leftTop', value: 'leftTop' },
            { label: 'leftBottom', value: 'leftBottom' },
            { label: 'right', value: 'right' },
            { label: 'rightTop', value: 'rightTop' },
            { label: 'rightBottom', value: 'rightBottom' },
            { label: 'bottom', value: 'bottom' },
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottomRight', value: 'bottomRight' },
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
          ],
        },
      },
    ],
  },
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultOpen',
    title: 'defaultOpen',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'overlayStyle',
    title: 'overlayStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'overlayClassName',
    title: 'overlayClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'arrow',
    title: 'arrow',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'pointAtCenter',
              title: 'pointAtCenter',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'color',
    title: 'color',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'overlayInnerStyle',
    title: 'overlayInnerStyle',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'zIndex',
    title: 'zIndex',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'destroyTooltipOnHide',
    title: 'destroyTooltipOnHide',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'align',
    title: 'align',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'getPopupContainer',
    title: 'getPopupContainer',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
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
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
