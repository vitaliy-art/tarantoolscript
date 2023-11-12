export interface Role {
  /**
   * Create a role.
   * @param name Name of role, which should conform to the rules for object names.
   * @param options Table – `if_not_exists = true|false` (default = `false`) - boolean; `true` means there should be no error if the role already exists.
   */
  create(this: void, name: string, options?: { if_not_exists?: boolean}): void;

  /**
   * Drop a role.
   * @param name The name of the role.
   * @param options Table – `if_exists = true|false` (default = `false`) - boolean; `true` means there should be no error if the role does not exist.
   */
  drop(this: void, name: string, options?: { if_exists?: boolean}): void;

  /**
   * Return `true` if a role exists; return `false` if a role does not exist.
   * @param name The name of the role.
   */
  exists(this: void, name: string): boolean;

  /**
   * Grant privileges to a role.
   * The role must exist, and the object must exist.
   * - Variation: instead of object-type, object-name say `universe` which means ‘all object-types and all objects’. In this case, object name is omitted.
   * - Variation: instead of privilege, object-type, object-name say role-name – to grant a role to a role.
   * @param name The name of the role.
   * @param privileges `read` or `write` or `execute` or `create` or `alter` or `drop` or a combination.
   * @param object_type `space` or `function` or `sequence` or `role`.
   * @param object_name The name of a function or space or sequence or role.
   * @param options Table – `if_not_exists = true|false` (default = `false`) - boolean; `true` means there should be no error if the role already has the privilege.
   */
  grant(this: void, name: string, privileges: string, object_type?: string, object_name?: string, options?: { if_not_exists?: boolean }): void;

  /**
   * Revoke privileges from a role.
   * The role must exist, and the object must exist, but it is not an error if the role does not have the privilege.
   * - Variation: instead of object-type, object-name say `universe` which means ‘all object-types and all objects’.
   * - Variation: instead of privilege, object-type, object-name say role-name.
   * @param name The name of the role.
   * @param privileges `read` or `write` or `execute` or `create` or `alter` or `drop` or a combination.
   * @param object-type `space` or `function` or `sequence` or `role`.
   * @param object-name The name of a function or space or sequence or role.
   */
  revoke(this: void, name: string, privileges: string, object_type?: string, object_name?: string): void;

  /**
   * Return a description of a role’s privileges.
   * @param name The name of the role.
   */
  info(this: void, name: string): string[][];
}
