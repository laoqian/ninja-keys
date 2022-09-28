export interface INinjaAction {
  id: string;
  title: string;
  isSearch?: boolean;
  hotkey?: string;
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string | RegExp;
  children?: string[];
  section?: string;
}
export interface INinjaActionData extends Omit<INinjaAction, 'children'> {
  children?: (INinjaActionData | string)[];
}
