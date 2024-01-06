import { SequenceObject } from './SequenceObject';
import { SequenceOptions } from './SequenceOptions';

/** @noSelf */
export interface Sequence extends LuaTable<string, SequenceObject> {
  /**
   * Create a new sequence generator.
   * @param name The name of the sequence.
   * @param options Sequence options.
   * @returns A reference to a new sequence object.
   */
  create(name: string, options?: SequenceOptions): SequenceObject;
}
