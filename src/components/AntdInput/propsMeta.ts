import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'showCount',
    title: 'showCount',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'formatter',
              title: 'formatter',
              valueType: 'object',
              setters: [
                {
                  componentName: 'ShapeSetter',
                  initialValue: {},
                  props: {
                    elements: [
                      {
                        name: 'namedArgs',
                        title: 'namedArgs',
                        valueType: 'object',
                        setters: [
                          {
                            componentName: 'ShapeSetter',
                            initialValue: {},
                            props: {
                              elements: [
                                {
                                  name: 'args',
                                  title: 'args',
                                  valueType: 'object',
                                  setters: [
                                    {
                                      componentName: 'ShapeSetter',
                                      initialValue: {},
                                      props: {
                                        elements: [
                                          {
                                            name: 'value',
                                            title: 'value',
                                            valueType: 'string',
                                            setters: [
                                              'StringSetter',
                                              'TextAreaSetter',
                                            ],
                                          },
                                          {
                                            name: 'count',
                                            title: 'count',
                                            valueType: 'number',
                                            setters: ['NumberSetter'],
                                          },
                                          {
                                            name: 'maxLength',
                                            title: 'maxLength',
                                            valueType: 'number',
                                            setters: ['NumberSetter'],
                                          },
                                        ],
                                      },
                                    },
                                    'JSONSetter',
                                  ],
                                },
                              ],
                            },
                          },
                          'JSONSetter',
                        ],
                      },
                    ],
                  },
                },
                'JSONSetter',
              ],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'autoComplete',
    title: 'autoComplete',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'htmlSize',
    title: 'htmlSize',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'count',
    title: 'count',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'max',
              title: 'max',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
            {
              name: 'strategy',
              title: 'strategy',
              valueType: 'object',
              setters: [
                {
                  componentName: 'ShapeSetter',
                  initialValue: {},
                  props: {
                    elements: [
                      {
                        name: 'namedArgs',
                        title: 'namedArgs',
                        valueType: 'object',
                        setters: [
                          {
                            componentName: 'ShapeSetter',
                            initialValue: {},
                            props: {
                              elements: [
                                {
                                  name: 'value',
                                  title: 'value',
                                  valueType: 'string',
                                  setters: ['StringSetter', 'TextAreaSetter'],
                                },
                              ],
                            },
                          },
                          'JSONSetter',
                        ],
                      },
                    ],
                  },
                },
                'JSONSetter',
              ],
            },
            {
              name: 'show',
              title: 'show',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'exceedFormatter',
              title: 'exceedFormatter',
              valueType: 'object',
              setters: [
                {
                  componentName: 'ShapeSetter',
                  initialValue: {},
                  props: {
                    elements: [
                      {
                        name: 'namedArgs',
                        title: 'namedArgs',
                        valueType: 'object',
                        setters: [
                          {
                            componentName: 'ShapeSetter',
                            initialValue: {},
                            props: {
                              elements: [
                                {
                                  name: 'value',
                                  title: 'value',
                                  valueType: 'string',
                                  setters: ['StringSetter', 'TextAreaSetter'],
                                },
                                {
                                  name: 'config',
                                  title: 'config',
                                  valueType: 'object',
                                  setters: [
                                    {
                                      componentName: 'ShapeSetter',
                                      initialValue: {},
                                      props: {
                                        elements: [
                                          {
                                            name: 'max',
                                            title: 'max',
                                            valueType: 'number',
                                            setters: ['NumberSetter'],
                                          },
                                        ],
                                      },
                                    },
                                    'JSONSetter',
                                  ],
                                },
                              ],
                            },
                          },
                          'JSONSetter',
                        ],
                      },
                    ],
                  },
                },
                'JSONSetter',
              ],
            },
          ],
        },
      },
      'JSONSetter',
    ],
  },
  {
    name: 'suffix',
    title: 'suffix',
    valueType: 'string',
    setters: [
      'StringSetter',
      'TextAreaSetter',
      'NumberSetter',
      'BooleanSetter',
    ],
  },
  {
    name: 'allowClear',
    title: 'allowClear',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'clearIcon',
              title: 'clearIcon',
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
    name: 'accept',
    title: 'accept',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'alt',
    title: 'alt',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'capture',
    title: 'capture',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      'StringSetter',
      'TextAreaSetter',
      'StringSetter',
      'TextAreaSetter',
    ],
  },
  {
    name: 'checked',
    title: 'checked',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'height',
    title: 'height',
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
    name: 'maxLength',
    title: 'maxLength',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'min',
    title: 'min',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'minLength',
    title: 'minLength',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'multiple',
    title: 'multiple',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'pattern',
    title: 'pattern',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'placeholder',
    title: 'placeholder',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'readOnly',
    title: 'readOnly',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'required',
    title: 'required',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'src',
    title: 'src',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
  {
    name: 'step',
    title: 'step',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'autoFocus',
    title: 'autoFocus',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'color',
    title: 'color',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
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
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
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
    name: 'status',
    title: 'status',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'warning',
              value: 'warning',
            },
            {
              label: 'error',
              value: 'error',
            },
            {
              label: '',
              value: '',
            },
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
];
