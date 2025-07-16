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
  advanceCustom: {
    wrapComponent(targetComponent, options) {
      return (props) => {
        const Comp = targetComponent;
        return <Comp {...props} htmlFor="span" />;
      };
    },
  },
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
