import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'value',
    title: 'value',
    valueType: 'object',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'object',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'fullscreen',
    title: 'fullscreen',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'headerRender',
    title: 'headerRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'dateFullCellRender',
    title: 'dateFullCellRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'dateCellRender',
    title: 'dateCellRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'monthFullCellRender',
    title: 'monthFullCellRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'monthCellRender',
    title: 'monthCellRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'validRange',
    title: 'validRange',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'disabledDate',
    title: 'disabledDate',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'locale',
    title: 'locale',
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
            { label: 'month', value: 'month' },
            { label: 'year', value: 'year' },
          ],
        },
      },
    ],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
