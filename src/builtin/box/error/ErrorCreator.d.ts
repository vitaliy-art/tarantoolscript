import { ErrorObject } from './ErrorObject';

interface ErrorCreator {
  /**
   * Create a predefined Tarantool error specified by its identifier. You can see all Tarantool errors in the errcode.h file.
   * @param code A pre-defined error identifier; Lua constants that correspond to those Tarantool errors are defined as members of `box.error`,
   * for example, `box.error.NO_SUCH_USER == 45`.
   * @param args Description arguments.
   */
  (this: void, code: number, ...args: unknown[]): void;

  /**
   * Create an error object with the specified type and description.
   * @param type An error type.
   * @param reason An error description.
   * @param args Description arguments.
   */
  (this: void, type: string, reason: string, ...args: unknown[]): ErrorObject;

  /**
   * Create an error object with the specified parameters.
   *
   * Parameters:
   * `reason` (`string`) – an error description.
   * `code` (`integer`) – (optional) a numeric code for this error.
   * `type` (`string`) – (optional) an error type.
   */
  (this: void, parameters: { reason: string, code?: number, type?: string }): ErrorObject;
}
