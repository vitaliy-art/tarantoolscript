import { MsgPackCfg } from './MsgPackCfg';

/** @noSelf */
export interface MsgPackCfgCallable extends MsgPackCfg {
  (this: void, cfg: MsgPackCfg): void;
}
