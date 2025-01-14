import { DomainFamily, Protocol, SocketType } from './Constants';

export interface SocketInfo {
  host?: string;
  port?: number;
  family?: DomainFamily;
  type?: SocketType;
  protocol?: Protocol;
}
