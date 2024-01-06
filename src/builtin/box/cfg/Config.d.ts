import { ConfigBasic } from './ConfigBasic';
import { ConfigStorage } from './ConfigStorage';
import { ConfigCheckpointDaemon } from './ConfigCheckpointDaemon';
import { ConfigBinaryLoggingSnapshot } from './ConfigBinaryLoggingSnapshot';
import { ConfigHotStandby } from './ConfigHotStandby';
import { ConfigReplication } from './ConfigReplication';
import { ConfigNetworking } from './ConfigNetworking';
import { ConfigLogging } from './ConfigLogging';
import { ConfigFeedback } from './ConfigFeedback';

interface ConfigCallable {
  (this: void, options: ConfigOptions): void;
}

export interface ConfigOptions extends
  ConfigBasic,
  ConfigStorage,
  ConfigCheckpointDaemon,
  ConfigBinaryLoggingSnapshot,
  ConfigHotStandby,
  ConfigReplication,
  ConfigNetworking,
  ConfigLogging,
  ConfigFeedback, { }

export interface Config extends
  ConfigCallable,
  ConfigOptions, { }
