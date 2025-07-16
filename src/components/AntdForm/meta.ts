import { CMaterialType } from '@chamn/model';
import { propMeta } from './propsMeta';
import { snippets } from './snippets';
import {
  componentName,
  title,
  category,
  groupName,
  isContainer,
} from './const';
import { events } from './eventMeta';

const ComponentMeta: CMaterialType = {
  componentName: componentName,
  title: title || componentName,
  props: [...propMeta],
  isContainer: isContainer,
  category: category || '',
  groupName: groupName || '',
  events: [...events],
  methods: [
    {
      name: 'setFieldValues',
      title: '设置表单值',
      params: [
        {
          name: 'values',
        },
      ],
    },
    {
      name: 'setFieldValue',
      title: '设置表单单个字段值',
      params: [
        {
          name: 'name',
        },
        {
          name: 'value',
        },
      ],
    },
    {
      name: 'getFieldsValue',
      title: '获取表单值',
      params: [
        {
          name: 'name',
        },
        {
          name: 'value',
        },
      ],
    },
    {
      name: 'getFieldValue',
      title: '获取表单单个字段值',
      params: [
        {
          name: 'name',
        },
      ],
    },

    {
      name: 'validateFields',
      title: '触发表单规则校验',
      params: [
        {
          name: 'name',
        },
      ],
    },
    {
      name: 'resetFormValues',
      title: '重置表单(使用初始值)',
    },
  ],
  npm: {
    name: componentName,
    package: __PACKAGE_NAME__ || '',
    version: __PACKAGE_VERSION__,
    destructuring: true,
    exportName: componentName,
  },
  snippets: snippets,
};

export default [ComponentMeta];
