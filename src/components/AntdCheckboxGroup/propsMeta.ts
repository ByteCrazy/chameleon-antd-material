import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'options',
    title: 'options',
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
                      name: 'value',
                      title: 'value',
                      valueType: 'string',
                      setters: [
                        'StringSetter',
                        'NumberSetter',
                        'ExpressionSetter',
                      ],
                    },
                    {
                      name: 'disabled',
                      title: 'disabled',
                      valueType: 'boolean',
                      setters: ['BooleanSetter', 'ExpressionSetter'],
                    },
                    {
                      name: 'required',
                      title: 'required',
                      valueType: 'boolean',
                      setters: ['BooleanSetter', 'ExpressionSetter'],
                    },
                    {
                      name: 'id',
                      title: 'id',
                      valueType: 'string',
                      setters: ['StringSetter'],
                    },
                    {
                      name: 'style',
                      title: 'style',
                      valueType: 'object',
                      setters: ['JSONSetter', 'ExpressionSetter'],
                    },
                  ],
                },
              },
              'NumberSetter',
              'StringSetter',
              'ExpressionSetter',
            ],
          },
        },
      },
      'ExpressionSetter',
    ],
  },
  {
    name: 'defaultValue',
    title: 'defaultValue',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'value',
    title: 'value',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },

  {
    name: 'name',
    title: 'name',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
