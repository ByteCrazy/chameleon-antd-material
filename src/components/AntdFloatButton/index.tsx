import React, { useMemo } from 'react';
import { ComponentProps } from './propsType';
import { FloatButton } from 'antd';

function formatOffsetPos(
  offsetPos?: ComponentProps['offsetPos']
): Record<string, string> {
  if (!offsetPos) return {};

  const result: Record<string, string> = {};

  ['top', 'left', 'right', 'bottom'].forEach((key) => {
    const value = offsetPos[key as keyof ComponentProps['offsetPos']];
    if (value !== undefined) {
      result[key] = typeof value === 'number' ? `${value}px` : value;
    }
  });

  return result;
}

export const AntdFloatButton = ({
  children,
  tooltip,
  offsetPos,
  isContainer,
  ...props
}: ComponentProps) => {
  const iOffset = useMemo(() => {
    return formatOffsetPos(offsetPos);
  }, [offsetPos]);
  return (
    <FloatButton
      {...props}
      icon={isContainer ? children : undefined}
      tooltip={tooltip}
      style={{
        ...(props.style || {}),
        ...iOffset,
      }}
    ></FloatButton>
  );
};
