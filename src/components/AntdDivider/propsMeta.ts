import { CMaterialType } from '@chamn/model';
import { isContainerMeta } from '../../commonMeta';
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
              label: 'horizontal',
              value: 'horizontal',
            },
            {
              label: 'vertical',
              value: 'vertical',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'borderColor',
    title: 'borderColor',
    valueType: 'string',
    setters: ['ColorSetter'],
  },
  ...isContainerMeta,
  {
    name: 'orientation',
    title: {
      label: 'orientation',
      tip: '分割线标题的位置',
    },
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            {
              label: 'start',
              value: 'start',
            },
            {
              label: 'center',
              value: 'center',
            },
            {
              label: 'end',
              value: 'end',
            },
          ],
        },
      },
    ],
  },
  {
    name: 'size',
    title: {
      label: 'size',
      tip: '间距大小，仅对水平布局有效',
    },
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
    name: 'dashed',
    title: 'dashed',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'plain',
    title: 'plain',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter', 'TextAreaSetter'],
  },
];
