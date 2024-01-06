import { MsgPackObject } from '../../msgpack';
import { Feature } from './Feature';
import { IProtoBallotKey } from './IProtoBallotKey';
import { IProtoFlag } from './IProtoFlag';
import { IProtoKey } from './IProtoKey';
import { IProtoMetadataKey } from './IProtoMetadataKey';
import { IProtoRaftKey } from './IProtoRaftKey';
import { IProtoRequestType } from './IProtoRequestType';
import { ProtocolFeatures } from './ProtocolFeatures';

/**
 * Since `2.11.0`.
 *
 * The `box.iproto` submodule provides the ability to work with the network subsystem of Tarantool.
 * It allows you to extend the IPROTO functionality from Lua. With this submodule, you can:
 * - parse unknown IPROTO request types.
 * - send arbitrary IPROTO packets.
 * - override the behavior of the existing and unknown request types in the binary protocol.
 *
 * The submodule exports all IPROTO constants and features to Lua.
 *
 * @noSelf
 */
export interface IProto {
  /** Contains all available request keys, except `raft`, `metadata`, and `ballot` keys. */
  key: IProtoKey;

  /** Contains all available request types. */
  type: IProtoRequestType;

  /** Contains the flags from the `IPROTO_FLAGS` key. */
  flag: IProtoFlag;

  /** Contains the keys from the IPROTO_BALLOT requests. */
  ballot_key: IProtoBallotKey;

  /** Contains the `IPROTO_FIELD_*` keys, which are nested in the `IPROTO_METADATA` key. */
  metadata_key: IProtoMetadataKey;

  /** Contains the keys from the `IPROTO_RAFT_*` requests. */
  raft_key: IProtoRaftKey;

  /** The current IPROTO protocol version of the server. */
  protocol_version: number;

  /** The set of IPROTO protocol features supported by the server. */
  protocol_features: ProtocolFeatures;

  /** Contains the IPROTO protocol features that are supported by the server. Each feature is mapped to its corresponding code. */
  feature: Feature;

  /**
   * Since version `2.11.0`.
   *
   * Set a new IPROTO request handler callback for the given request type.
   * @param requestType A request type code. Possible values:
   * - a type code from `box.iproto.type` (except `box.iproto.type.UNKNOWN`) – override the existing request type handler.
   * - `box.iproto.type.UNKNOWN` – override the handler of unknown request types.
   * @param handler IPROTO request handler. The signature of a handler function: `function(sid, header, body)`, where
   * - header (userdata): a request header encoded as a msgpack_object
   * - body (userdata): a request body encoded as a msgpack_object
   *
   * Returns `true` on success, otherwise `false`. On `false`, there is a fallback to the default handler.
   * Also, you can indicate an error by throwing an exception. In this case, the return value is false, but this does not always mean a failure.
   *
   * To reset the request handler, set the handler parameter to `nil`.
   *
   * Warning:
   *
   * When using `box.iproto.override()`, it is important that you follow the wire protocol.
   * That is, the server response should match the return value types of the corresponding request type.
   * Otherwise, it could lead to peer breakdown or undefined behavior.
   */
  override(requestType: number, handler?: (header: MsgPackObject, body: MsgPackObject) => boolean): void;
}
