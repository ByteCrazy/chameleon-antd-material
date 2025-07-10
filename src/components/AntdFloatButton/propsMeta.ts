import { CMaterialType } from '@chamn/model';
import { tooltipPropsMeta } from '../../commonMeta/tooltipPropsMeta';
import { isContainerMeta, tlbtSetter } from '../../commonMeta';
export const propMeta: CMaterialType['props'] = [
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
          ],
        },
      },
    ],
  },
  ...isContainerMeta,
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
              label: 'circle',
              value: 'circle',
            },
            {
              label: 'square',
              value: 'square',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'offsetPos',
    title: 'offsetPos',
    valueType: 'object',
    setters: [tlbtSetter],
  },
  {
    name: 'tooltip',
    title: 'tooltip',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'title',
              title: 'title',
              valueType: 'string',
              setters: ['StringSetter', 'TextAreaSetter'],
            },
            ...tooltipPropsMeta,
          ],
        },
      },
    ],
  },
  {
    name: 'badge',
    title: 'badge',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'count',
              title: 'count',
              valueType: 'string',
              setters: [
                'StringSetter',
                'TextAreaSetter',
                'NumberSetter',
                'BooleanSetter',
                'ExpressionSetter',
              ],
            },
            {
              name: 'showZero',
              title: 'showZero',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'overflowCount',
              title: 'overflowCount',
              valueType: 'number',
              setters: ['NumberSetter'],
            },
          ],
        },
      },
    ],
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
];
