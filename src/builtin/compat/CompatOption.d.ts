export type CompatOption =
  | {
      current: CompatOption;
      default: Exclude<CompatOptionVersion, 'default'>;
      brief?: string;
    }
  | CompatOptionVersion
  | `default (${'old' | 'new'})`;

export type CompatOptionVersion = 'new' | 'old' | 'default';
