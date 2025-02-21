/** @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/compat/ */
/** @noSelfInFile */

import { CompatOption, CompatOptionVersion } from './CompatOption';

export declare let sql_priv: CompatOption | undefined;
export declare let binary_data_decoding: CompatOption | undefined;
export declare let c_func_iproto_multireturn: CompatOption | undefined;
export declare let fiber_channel_close_mode: CompatOption | undefined;
export declare let sql_seq_scan_default: CompatOption | undefined;
export declare let box_error_serialize_verbose: CompatOption | undefined;
export declare let box_error_unpack_type_and_code: CompatOption | undefined;
export declare let yaml_pretty_multiline: CompatOption | undefined;
export declare let box_info_cluster_meaning: CompatOption | undefined;
export declare let box_tuple_new_vararg: CompatOption | undefined;
export declare let box_consider_system_spaces_synchronous:
  | CompatOption
  | undefined;
export declare let box_tuple_extension: CompatOption | undefined;
export declare let box_session_push_deprecation: CompatOption | undefined;
export declare let json_escape_forward_slash: CompatOption | undefined;
export declare let box_space_max: CompatOption | undefined;
export declare let fiber_slice_default: CompatOption | undefined;
export declare let box_space_execute_priv: CompatOption | undefined;
export declare let console_session_scope_vars: CompatOption | undefined;
export declare let box_cfg_replication_sync_timeout: CompatOption | undefined;

export declare function dump(version?: CompatOptionVersion): string;

export declare function add_option(options: {
  name: string;
  default: 'new' | 'old';
  /** explanation of the option, can be multiline string */
  brief?: string;
  /**
   * (’X.Y’ / `nil`) — tarantool version that marked option as obsolete.
   * When `nil`, option is treated as non-obsolete).
   */
  obsolete?: string;
  /** function (argument - boolean `is_new`, changes the behavior accordingly) */
  action?: (this: void, is_new: boolean) => unknown;
  /**  (`true` / `false` / `nil`) if `add_options` should run action afterwards, false by default */
  run_action_now?: boolean;
}): void;
