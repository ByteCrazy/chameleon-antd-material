export type ComponentProps = {
  options:
    | {
        label: string;
        value: string;
        disabled?: boolean;
      }[]
    | string[]
    | number[];
  disabled?: boolean;
  name?: string;
  defaultValue: string[];
};
