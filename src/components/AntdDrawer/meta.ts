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
  rootSelector: '.ant-drawer-content-wrapper',
  category: category || '',
  fixedProps: {
    open: true,
    getContainer: false,
  },
  groupName: groupName || '',
  events: [...events],
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
