export interface ReadViewObject {
  timestamp: number;
  signature: number;
  is_system: boolean;
  status: string;
  vclock: LuaTable<number, number>;
  name: string;
  id: number;
}
