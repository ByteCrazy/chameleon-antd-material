import { CMaterialEventType, DEFAULT_EVENT_LIST } from '@chamn/model';

export const events: CMaterialEventType[] = [
  {
    name: 'onChange',
    event: 'onChange',
    descriptions: '上传文件改变时的状态',
  },
  {
    name: 'onPreview',
    event: 'onPreview',
    descriptions: '点击文件链接或预览图标时的回调',
  },
  {
    name: 'onRemove',
    event: 'onRemove',
    descriptions: '点击移除文件时的回调',
  },
  {
    name: 'onDownload',
    event: 'onDownload',
    descriptions: '点击下载文件时的回调',
  },
  {
    name: 'beforeUpload',
    event: 'beforeUpload',
    descriptions: '上传文件之前的钩子',
  },
  ...DEFAULT_EVENT_LIST,
];
