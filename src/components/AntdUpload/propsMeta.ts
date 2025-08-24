import { CMaterialType } from '@chamn/model';

export const propMeta: CMaterialType['props'] = [
  {
    name: 'action',
    title: 'action',
    valueType: 'string',
    setters: ['StringSetter', 'ExpressionSetter'],
  },
  {
    name: 'accept',
    title: 'accept',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'listType',
    title: 'listType',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'text', value: 'text' },
            { label: 'picture', value: 'picture' },
            { label: 'picture-card', value: 'picture-card' },
            { label: 'picture-circle', value: 'picture-circle' },
          ],
        },
      },
    ],
  },
  {
    name: 'fileList',
    title: 'fileList',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'defaultFileList',
    title: 'defaultFileList',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'multiple',
    title: 'multiple',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'directory',
    title: 'directory',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'disabled',
    title: 'disabled',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'maxCount',
    title: 'maxCount',
    valueType: 'number',
    setters: ['NumberSetter'],
  },
  {
    name: 'name',
    title: 'name',
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'showUploadList',
    title: 'showUploadList',
    valueType: 'boolean',
    setters: [
      'BooleanSetter',
      {
        componentName: 'ShapeSetter',
        initialValue: {},
        props: {
          elements: [
            {
              name: 'showPreviewIcon',
              title: 'showPreviewIcon',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'showRemoveIcon',
              title: 'showRemoveIcon',
              valueType: 'boolean',
              setters: ['BooleanSetter'],
            },
            {
              name: 'showDownloadIcon',
              title: 'showDownloadIcon',
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
    name: 'headers',
    title: 'headers',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter'],
  },
  {
    name: 'method',
    title: 'method',
    valueType: 'string',
    setters: [
      {
        componentName: 'SelectSetter',
        props: {
          options: [
            { label: 'POST', value: 'POST' },
            { label: 'PUT', value: 'PUT' },
            { label: 'PATCH', value: 'PATCH' },
          ],
        },
      },
    ],
  },
  {
    name: 'data',
    title: 'data',
    valueType: 'object',
    setters: ['JSONSetter', 'ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'withCredentials',
    title: 'withCredentials',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'openFileDialogOnClick',
    title: 'openFileDialogOnClick',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
  {
    name: 'previewFile',
    title: 'previewFile',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'transformFile',
    title: 'transformFile',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'itemRender',
    title: 'itemRender',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'isImageUrl',
    title: 'isImageUrl',
    valueType: 'object',
    setters: ['ExpressionSetter', 'FunctionSetter'],
  },
  {
    name: 'progress',
    title: 'progress',
    valueType: 'object',
    setters: ['JSONSetter'],
  },
  {
    name: 'rootClassName',
    title: 'rootClassName',
    valueType: 'string',
    setters: ['StringSetter'],
  },
];
