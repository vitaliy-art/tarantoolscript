import { TupleObject } from '../tuple/TupleObject';

export type TriggerFunction =
  | ((this: void) => TupleObject | void)
  | ((this: void, old_tuple: TupleObject) => TupleObject | void)
  | ((this: void, old_tuple: TupleObject, new_tuple: TupleObject) => TupleObject | void)
  | ((this: void, old_tuple: TupleObject, new_tuple: TupleObject, space_name: string) => TupleObject | void)
  | ((this: void, old_tuple: TupleObject, new_tuple: TupleObject, space_name: string, request_type: 'INSERT' | 'DELETE' | 'UPDATE' | 'REPLACE') => TupleObject | void)
