import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'items',
    title: 'items',
    valueType: 'array',
    setters: [
      {
        componentName: 'ArraySetter',
        initialValue: [],
        props: {
          item: {
            initialValue: {},
            setters: [
              {
                componentName: 'ShapeSetter',
                initialValue: {},
                props: {
                  elements: [
                    {
                      name: 'label',
                      title: 'label',
                      valueType: 'string',
                      setters: ['StringSetter'],
                    },
                    {
                      name: 'color',
                      title: 'color',
                      valueType: 'string',
                      setters: [
                        'StringSetter',
                        'ColorSetter',
                        'ExpressionSetter',
                      ],
                    },
                    {
                      name: 'children',
                      title: 'children',
                      valueType: 'string',
                      setters: ['StringSetter', 'ExpressionSetter'],
                    },
                    {
                      name: 'position',
                      title: 'position',
                      valueType: 'string',
                      setters: [
                        {
                          componentName: 'SelectSetter',
                          props: {
                            options: [
                              { label: 'left', value: 'left' },
                              { label: 'right', value: 'right' },
                            ],
                          },
                        },
                        'ExpressionSetter',
                      ],
                    },
                  ],
                },
              },
              'ExpressionSetter',
            ],
          },
        },
      },
      'ExpressionSetter',
    ],
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
            { label: 'left', value: 'left' },
            { label: 'alternate', value: 'alternate' },
            { label: 'right', value: 'right' },
          ],
        },
      },
    ],
  },
  {
    name: 'pending',
    title: 'pending',
    valueType: 'string',
    setters: ['StringSetter', 'BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'pendingDot',
    title: 'pendingDot',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'reverse',
    title: 'reverse',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'style',
    title: 'style',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'className',
    title: 'className',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
