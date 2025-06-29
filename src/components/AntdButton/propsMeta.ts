import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'autoFocus',
    title: 'autoFocus',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'dangerouslySetInnerHTML',
    title: 'dangerouslySetInnerHTML',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: '__html',
              title: '__html',
              valueType: 'string',
              setters: ['StringSetter', 'TextAreaSetter'],
            },
          ],
        },
      },
      'JSONSetter',
    ],
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
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'dashed',
              value: 'dashed',
            },
            {
              label: 'link',
              value: 'link',
            },
            {
              label: 'text',
              value: 'text',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'color',
    title: 'color',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'primary',
              value: 'primary',
            },
            {
              label: 'danger',
              value: 'danger',
            },
            {
              label: 'blue',
              value: 'blue',
            },
            {
              label: 'purple',
              value: 'purple',
            },
            {
              label: 'cyan',
              value: 'cyan',
            },
            {
              label: 'green',
              value: 'green',
            },
            {
              label: 'magenta',
              value: 'magenta',
            },
            {
              label: 'pink',
              value: 'pink',
            },
            {
              label: 'red',
              value: 'red',
            },
            {
              label: 'orange',
              value: 'orange',
            },
            {
              label: 'yellow',
              value: 'yellow',
            },
            {
              label: 'volcano',
              value: 'volcano',
            },
            {
              label: 'geekblue',
              value: 'geekblue',
            },
            {
              label: 'lime',
              value: 'lime',
            },
            {
              label: 'gold',
              value: 'gold',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'shape',
    title: 'shape',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'circle',
              value: 'circle',
            },
            {
              label: 'round',
              value: 'round',
            },
          ],
        },
      },
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
            {
              label: 'small',
              value: 'small',
            },
            {
              label: 'middle',
              value: 'middle',
            },
            {
              label: 'large',
              value: 'large',
            },
          ],
        },
      },
    ],
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
              name: 'delay',
              title: 'delay',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'icon',
              title: 'icon',
              valueType: 'string',
              setters: [
                'StringSetter',
                'TextAreaSetter',
                'NumberSetter',
                'BooleanSetter',
              ],
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
  {
    name: 'ghost',
    title: 'ghost',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'danger',
    title: 'danger',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'block',
    title: 'block',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
];
