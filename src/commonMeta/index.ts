import { MaterialPropType, SetterType } from '@chamn/model';

export const isContainerMeta: MaterialPropType<''>[] = [
  {
    name: 'isContainer',
    title: '开启容器',
    valueType: 'boolean',
    setters: ['BooleanSetter'],
  },
];

export const tlbtSetter: SetterType = {
  componentName: 'ShapeSetter',
  initialValue: {},
  props: {
    elements: [
      {
        name: 'top',
        title: 'top',
        valueType: 'number',
        setters: ['NumberSetter', 'StringSetter'],
      },
      {
        name: 'bottom',
        title: 'bottom',
        valueType: 'number',
        setters: ['NumberSetter', 'StringSetter'],
      },
      {
        name: 'left',
        title: 'left',
        valueType: 'number',
        setters: ['NumberSetter', 'StringSetter'],
      },
      {
        name: 'right',
        title: 'right',
        valueType: 'number',
        setters: ['NumberSetter', 'StringSetter'],
      },
    ],
  },
};
