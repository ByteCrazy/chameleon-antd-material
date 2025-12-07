import { CMaterialType } from '@chamn/model';

/**
 * width	水印的宽度，content 的默认值为自身的宽度	number	120
height	水印的高度，content 的默认值为自身的高度	number	64
inherit	是否将水印传导给弹出组件如 Modal、Drawer	boolean	true	5.11.0
rotate	水印绘制时，旋转的角度，单位 °	number	-22
zIndex	追加的水印元素的 z-index	number	9
image	图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式)	string	-
content	水印文字内容	string | string[]	-
font	文字样式	Font	Font
gap	水印之间的间距	[number, number]	[100, 100]
offset	水印距离容器左上角的偏移量，默认为 gap/2	[number, number]	[gap[0]/2, gap[1]/2]
 */

export const propMeta: CMaterialType['props'] = [
  {
    name: 'width',
    title: {
      label: 'width',
      tip: '水印的宽度，content 的默认值为自身的宽度',
    },
    valueType: 'number',
    setters: ['NumberSetter'],
  },

  {
    name: 'height',
    title: 'height',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'content',
    title: 'content',
    valueType: 'string',
    setters: [
      'StringSetter',
      {
        componentName: 'ArraySetter',
        initialValue: [],
        props: {
          item: {
            setters: ['StringSetter'],
            initialValue: '',
          },
        },
      },
    ],
  },
  {
    name: 'inherit',
    title: {
      label: 'inherit',
      tip: '是否将水印传导给弹出组件如 Modal、Drawer',
    },
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'rotate',
    title: {
      label: 'rotate',
      tip: '水印绘制时，旋转的角度，单位 °',
    },
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'zIndex',
    title: 'zIndex',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'image',
    title: {
      label: 'image',
      tip: '图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式)',
    },
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'font',
    title: 'font',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'gap',
    title: {
      label: 'gap',
      tip: '水印之间的间距',
    },
    valueType: 'array',
    setters: ['NumberSetter'],
  },
  {
    name: 'offset',
    title: {
      label: 'offset',
      tip: '水印距离容器左上角的偏移量，默认为 gap/2',
    },
    valueType: 'array',
    setters: ['ArraySetter'],
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
