import { AIFlag, DomainFamily, Protocol, SocketType } from './Constants';

export interface SocketOptionList {
  /** Preferred socket type. */
  type: SocketType;
  /** Desired address family for the returned addresses. */
  family: DomainFamily;
  protocol: Protocol;
  /** Additional options. */
  flag: AIFlag;
}
