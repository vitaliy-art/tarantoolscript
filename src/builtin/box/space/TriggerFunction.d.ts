import { TupleObject } from '../tuple/TupleObject';

export interface TriggerFunction {
  (): TupleObject | void;
  (old_tuple: TupleObject): TupleObject | void;
  (old_tuple: TupleObject, new_tuple: TupleObject): TupleObject | void;
  (old_tuple: TupleObject, new_tuple: TupleObject, space_name: string): TupleObject | void;
  (old_tuple: TupleObject, new_tuple: TupleObject, space_name: string, request_type: 'INSERT' | 'DELETE' | 'UPDATE' | 'REPLACE'): TupleObject | void;
}
