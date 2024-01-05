/** @noSelfInFile */

import { MsgPackCfg } from './MsgPackCfg';

export interface MsgPackCfgCallable extends MsgPackCfg {
  (cfg: MsgPackCfg): void;
}
