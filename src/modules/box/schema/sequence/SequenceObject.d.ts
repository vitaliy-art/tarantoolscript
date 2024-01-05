import { SequenceOptions } from './SequenceOptions';

export interface SequenceObject  {
  /** Generate the next value and return it. */
  next(): number;

  /** Change any of the sequence’s options. */
  alter(options: SequenceOptions): void;

  /**
   * Set the sequence back to its original state. The effect is that a subsequent `next()` will return the start value.
   * This function requires a ‘write’ privilege on the sequence.
   */
  reset(): void;

  /**
   * Set the “previous value” to `new-previous-value`. This function requires a ‘write’ privilege on the sequence.
   * @param newPreviousValue A Previous value.
   */
  set(newPreviousValue: number): void;

  /**
   * Since version `2.4.1`.
   *
   * Return the last retrieved value of the specified sequence or throw an error if no value has been generated yet
   * (`next()` has not been called yet, or `current()` is called right after `reset()` is called).
   */
  current(): number;

  /** Drop an existing sequence. */
  drop(): void;
}
