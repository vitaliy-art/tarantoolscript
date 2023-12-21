export interface User {
  /** Create a user. */
  create(this: void, name: string, options?: { if_not_exists?: boolean; password?: string; }): void;

  /** Drop a user. */
  drop(this: void, name: string, options?: { if_exists: boolean; }): void;

  /** Return `true` if a user exists; return `false` if a user does not exist. */
  exists(this: void, name: string): boolean;

  /**
   * Grant privileges to a user or to another role.
   *
   * If `function`,`object-name` is specified, then a _func tuple with that object-name must exist.
   *
   * - Variation: instead of object-type, object-name say `universe` which means ‘all object-types and all objects’. In this case, object name is omitted.
   * - Variation: instead of privilege, object-type, object-name say role-name (see section Roles).
   * - Variation: instead of `box.schema.user.grant('user-name','usage,session','universe',nil, {if_not_exists=true})` say `box.schema.user.enable('user-name')`.
   * @param name The name of a user to grant privileges to.
   * @param privileges One or more privileges to grant to the user (for example, `read` or `read,write`). Or the name of a role to grant to the user
   * @param object_type A database object type to grant privileges to (for example, `space`, `role`, or `function`).
   * @param object_name The name of a database object to grant privileges to.
   * @param options Table. `grantor` - grantor_name_or_id – `string` or `number`, for custom grantor; if_not_exists - `true` means there should be no error if the user already has the privilege.
   */
  grant(this: void, name: string, privileges: string, object_type?: string, object_name?: string, options?: { grantor?: string | number; if_not_exists?: boolean; }): void;

  /**
   * The same as `box.schema.user.grant('user-name','usage,session','universe',nil, {if_not_exists=true})`.
   */
  enable(this: void, name: string): void;
  /**
   * Revoke privileges from a user or from another role.
   *
   * The user must exist, and the object must exist, but if the option setting is `{if_exists=true}` then it is not an error if the user does not have the privilege.
   *
   * - Variation: instead of object-type, object-name say `universe` which means ‘all object-types and all objects’.
   * - Variation: instead of privilege, object-type, object-name say role-name (see section Roles).
   * - Variation: instead of `box.schema.user.revoke('user-name','usage,session','universe',nil, {if_exists=true})` say `box.schema.user.disable('user-name')`.
   * @param name The name of the user.
   * @param privileges `read` or `write` or `execute` or `create` or `alter` or `drop` or a combination. Or the name of a role.
   * @param object_type `space` or `function` or `sequence`.
   * @param object_name The name of a function or space or sequence.
   * @param options Table.
   */
  revoke(this: void, name: string, privileges: string, object_type?: string, object_name?: string, options?: { if_exists?: boolean; }): void;

  /**
   * The same as `box.schema.user.revoke('user-name','usage,session','universe',nil, {if_exists=true})`.
   */
  disable(this: void, name: string): void;

  /** Return a hash of a user’s password. */
  password(this: void): string;

  /**
   * Sets a password for a currently logged in or a specified user:
   * - A currently logged in user can change their password using `box.schema.user.passwd(new_password)`.
   * - An administrator can change the password of another user with `box.schema.user.passwd(name, new_password)`.
   */
  passwd(this: void, name: string, new_password: string): void; (new_password: string): void;

  /**
   * Return a description of a user’s privileges.
   * @param name The name of the user. This is optional; if it is not supplied, then the information will be for the user who is currently logged in.
   */
  info(this: void, name?: string): string[][];
}
