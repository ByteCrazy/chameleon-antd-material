import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'level',
    title: 'level',
    valueType: 'number',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: 3 },
            { label: '4', value: 4 },
            { label: '5', value: 5 },
          ],
        },
      },
    ],
  },
  {
    name: 'italic',
    title: 'italic',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'type',
    title: 'type',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'secondary', value: 'secondary' },
            { label: 'success', value: 'success' },
            { label: 'warning', value: 'warning' },
            { label: 'danger', value: 'danger' },
          ],
        },
      },
    ],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'mark',
    title: 'mark',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'code',
    title: 'code',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'keyboard',
    title: 'keyboard',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'underline',
    title: 'underline',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'delete',
    title: 'delete',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'strong',
    title: 'strong',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'copyable',
    title: 'copyable',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'text',
              title: 'text',
              valueType: 'string',
              setters: ['StringSetter'],
            },
            {
              name: 'tooltips',
              title: 'tooltips',
              valueType: 'object',
              setters: ['JSONSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'editable',
    title: 'editable',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'tooltip',
              title: 'tooltip',
              valueType: 'string',
              setters: ['StringSetter', 'BooleanSetter'],
            },
            {
              name: 'maxLength',
              title: 'maxLength',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'autoSize',
              title: 'autoSize',
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
    name: 'ellipsis',
    title: 'ellipsis',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'rows',
              title: 'rows',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'expandable',
              title: 'expandable',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'symbol',
              title: 'symbol',
              valueType: 'string',
              setters: ['StringSetter'],
            },
            {
              name: 'tooltip',
              title: 'tooltip',
              valueType: 'string',
              setters: ['StringSetter', 'BooleanSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
];
