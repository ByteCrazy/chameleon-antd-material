import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'min',
    title: 'min',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'max',
    title: 'max',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'step',
    title: 'step',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'value',
    title: 'value',
    valueType: 'number',
    setters: ['NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'range',
    title: 'range',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'reverse',
    title: 'reverse',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'vertical',
    title: 'vertical',
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
    name: 'dots',
    title: 'dots',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'included',
    title: 'included',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'marks',
    title: 'marks',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'tooltip',
    title: 'tooltip',
    valueType: 'object',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
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
              name: 'open',
              title: 'open',
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
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
];
