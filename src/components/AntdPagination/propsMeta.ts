import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'current',
    title: 'current',
    valueType: 'number',
    setters: ['NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultCurrent',
    title: 'defaultCurrent',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'total',
    title: 'total',
    valueType: 'number',
    setters: ['NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'pageSize',
    title: 'pageSize',
    valueType: 'number',
    setters: ['NumberSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultPageSize',
    title: 'defaultPageSize',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'hideOnSinglePage',
    title: 'hideOnSinglePage',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showSizeChanger',
    title: 'showSizeChanger',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showQuickJumper',
    title: 'showQuickJumper',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'goButton',
              title: 'goButton',
              valueType: 'string',
              setters: ['StringSetter', 'BooleanSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'showTotal',
    title: 'showTotal',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'simple',
    title: 'simple',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
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
            { label: 'default', value: 'default' },
            { label: 'small', value: 'small' },
          ],
        },
      },
    ],
  },
  {
    name: 'responsive',
    title: 'responsive',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'pageSizeOptions',
    title: 'pageSizeOptions',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'showLessItems',
    title: 'showLessItems',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showTitle',
    title: 'showTitle',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'itemRender',
    title: 'itemRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
];
