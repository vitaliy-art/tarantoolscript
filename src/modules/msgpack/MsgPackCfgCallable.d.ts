import { MsgPackCfg } from './MsgPackCfg';

/** @noSelf */
export interface MsgPackCfgCallable extends MsgPackCfg {
  (cfg: MsgPackCfg): void;
}
