export interface CheckConstraint {
  drop(): void;
  enable(enable: boolean): void;
}
