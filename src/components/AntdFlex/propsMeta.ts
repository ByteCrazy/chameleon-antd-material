import { CMaterialType } from '@chamn/model';
export const propMeta: CMaterialType['props'] = [
  {
    name: 'vertical',
    title: 'vertical',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'justify',
    title: 'justify',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'flex-start', value: 'flex-start' },
            { label: 'center', value: 'center' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'space-between', value: 'space-between' },
            { label: 'space-around', value: 'space-around' },
            { label: 'space-evenly', value: 'space-evenly' },
          ],
        },
      },
    ],
  },
  {
    name: 'align',
    title: 'align',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'flex-start', value: 'flex-start' },
            { label: 'center', value: 'center' },
            { label: 'flex-end', value: 'flex-end' },
          ],
        },
      },
    ],
  },
  {
    name: 'component',
    title: {
      label: 'component',
      tip: '自定义包裹的 html 标签',
    },
    valueType: 'boolean',
    setters: ['StringSetter'],
  },
  {
    name: 'wrap',
    title: {
      label: 'wrap',
      tip: '设置元素单行显示还是多行显示	',
    },
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'gap',
    title: {
      label: 'gap',
      tip: 'css 尺寸，需要携带 px ｜ % 单位',
    },
    valueType: 'string',
    setters: ['StringSetter'],
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
