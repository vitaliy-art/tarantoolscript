export * from './builtin/socket/Socket';
import * as socket from './builtin/socket/Socket';

type Socket = {
  [K in keyof typeof socket]: (typeof socket)[K];
};

export interface CallableSocket extends Socket {
  (this: void, ...args: Parameters<(typeof socket)['__call']>): ReturnType<
    (typeof socket)['__call']
  >;
}
