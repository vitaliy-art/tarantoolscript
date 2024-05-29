/** @noSelfInFile */

import { IndexOptionsParts } from '../box';
import { KeyDefObject } from './KeyDefObject';

/**
 * Create a new key_def instance.
 * @param parts Field numbers and types. There must be at least one part.
 * Every part must contain the attributes `type` and `fieldno`/`field`. Other attributes are optional.
 * @customName new
 * */
export declare function new_(parts: IndexOptionsParts[]): KeyDefObject;
