export type UpdateOperator =
  | '+' // for addition. values must be numeric, e.g. unsigned or decimal
  | '-' // for subtraction. values must be numeric
  | '&' // for bitwise AND. values must be unsigned numeric
  | '|' // for bitwise OR. values must be unsigned numeric
  | '^' // for bitwise XOR. values must be unsigned numeric
  | ':' // for string splice.
  | '!' // for insertion of a new field.
  | '#' // for deletion.
  | '=' // for assignment.
