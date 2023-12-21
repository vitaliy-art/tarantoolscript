import { UpdateOperator } from './UpdateOperator';

export interface UpdateOperation {
  operator: UpdateOperator;

  /**
   * What field the operation will apply to.
   *
   * Possible field_identifiers are:
   * - Positive field number. The first field is 1, the second field is 2, and so on.
   * - Negative field number. The last field is -1, the second-last field is -2, and so on. In other words: (#tuple + negative field number + 1).
   * - Name. If the space was formatted with `space_object:format()`, then this can be a string for the field ‘name’.
   */
  field_identifier: number | string;

  /**
   * What value will be applied.
   */
  value: unknown;
}
