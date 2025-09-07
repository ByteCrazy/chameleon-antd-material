import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'columns',
    title: 'columns',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'dataSource',
    title: 'dataSource',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'loading',
    title: 'loading',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'spinning',
              title: 'spinning',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'tip',
              title: 'tip',
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
                      { label: 'small', value: 'small' },
                      { label: 'default', value: 'default' },
                      { label: 'large', value: 'large' },
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
      'ExpressionSetter',
    ],
  },
  {
    name: 'pagination',
    title: 'pagination',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'current',
              title: 'current',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'pageSize',
              title: 'pageSize',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'total',
              title: 'total',
              valueType: 'number',
              setters: ['NumberSetter'],
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
              setters: ['BooleanSetter'],
            },
            {
              name: 'showTotal',
              title: 'showTotal',
              valueType: 'object',
              setters: ['ExpressionSetter', 'FunctionSetter'],
            },
          ],
        },
      },
      'ExpressionSetter',
    ],
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
    name: 'bordered',
    title: 'bordered',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'showHeader',
    title: 'showHeader',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'scroll',
    title: 'scroll',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'x',
              title: 'x',
              valueType: 'number',
              setters: ['NumberSetter', 'StringSetter'],
            },
            {
              name: 'y',
              title: 'y',
              valueType: 'number',
              setters: ['NumberSetter', 'StringSetter'],
            },
            {
              name: 'scrollToFirstRowOnChange',
              title: 'scrollToFirstRowOnChange',
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
    name: 'sticky',
    title: 'sticky',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'offsetHeader',
              title: 'offsetHeader',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'offsetScroll',
              title: 'offsetScroll',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'getContainer',
              title: 'getContainer',
              valueType: 'object',
              setters: ['ExpressionSetter', 'FunctionSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'rowSelection',
    title: 'rowSelection',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'type',
              title: 'type',
              valueType: 'string',
              setters: [
                {
                  componentName: 'SelectSetter',
                  props: {
                    options: [
                      { label: 'checkbox', value: 'checkbox' },
                      { label: 'radio', value: 'radio' },
                    ],
                  },
                },
              ],
            },
            {
              name: 'selectedRowKeys',
              title: 'selectedRowKeys',
              valueType: 'object',
              setters: ['JSONSetter', 'ExpressionSetter'],
            },
            {
              name: 'fixed',
              title: 'fixed',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'hideSelectAll',
              title: 'hideSelectAll',
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
    name: 'expandable',
    title: 'expandable',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'expandedRowKeys',
              title: 'expandedRowKeys',
              valueType: 'object',
              setters: ['JSONSetter', 'ExpressionSetter'],
            },
            {
              name: 'defaultExpandAllRows',
              title: 'defaultExpandAllRows',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'indentSize',
              title: 'indentSize',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'showExpandColumn',
              title: 'showExpandColumn',
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
    name: 'title',
    title: 'title',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'footer',
    title: 'footer',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'summary',
    title: 'summary',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'virtual',
    title: 'virtual',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'rowKey',
    title: 'rowKey',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'rowClassName',
    title: 'rowClassName',
    valueType: 'object',
    setters: ['StringSetter', 'ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
