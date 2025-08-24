import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'menu',
    title: 'menu',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'items',
              title: 'items',
              valueType: 'object',
              setters: ['JSONSetter', 'ExpressionSetter'],
            },
          ],
        },
      },
      'JSONSetter',
      'ExpressionSetter',
    ],
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
    name: 'autoFocus',
    title: 'autoFocus',
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
    name: 'destroyPopupOnHide',
    title: 'destroyPopupOnHide',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'open',
    title: 'open',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
            { label: 'bottom', value: 'bottom' },
            { label: 'bottomLeft', value: 'bottomLeft' },
            { label: 'bottomRight', value: 'bottomRight' },
            { label: 'top', value: 'top' },
            { label: 'topLeft', value: 'topLeft' },
            { label: 'topRight', value: 'topRight' },
          ],
        },
      },
    ],
  },
  {
    name: 'trigger',
    title: 'trigger',
    valueType: 'object',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          mode: 'multiple',
          options: [
            { label: 'click', value: 'click' },
            { label: 'hover', value: 'hover' },
            { label: 'contextMenu', value: 'contextMenu' },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'overlayClassName',
    title: 'overlayClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'overlayStyle',
    title: 'overlayStyle',
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
];
