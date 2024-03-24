# TarantoolScript

TarantoolScript is a tool to help you create [Tarantool](https://www.tarantool.io/ru/) [Lua](https://www.lua.org/) scripts using [TypeScript](https://www.typescriptlang.org/).

# Getting started

To install Tarantoolscript add `tarantoolscript` npm package to your TypeScript project:

```
$ npm install --save-dev tarantoolscript
```

Also to compile your TypeScript program to Lua scripts, you need to install TypeScriptToLua:

```
$ npm install --save-dev typescript-to-lua
```

[Here](https://typescripttolua.github.io/docs/getting-started) you can find more information about TypeScriptToLua.

# Usage

Tarantoolscript provides some type declarations useful to create you own Lua scripts which may be executed by Tarantool. [Here](https://www.tarantool.io/en/doc/latest/overview/) you can find more information about Tarantool.

## Basic usage

### Init instance

Interface `Box` describes all functions and submodules, included into Tarantool global variable `box`. To use it, just declare constant `box` of type `Box`:

```ts
import { Box, ConfigOptions } from 'tarantoolscript';

declare const box: Box;

const cfg: ConfigOptions = {
    listen: 3301,
};

box.cfg(cfg);
```

TypeScriptToLua will compile this TypeScript code to following Lua code:

```lua
local ____exports = {}
local cfg = {listen = 3301}
box.cfg(cfg)
return ____exports
```

### Create space

```ts
const bands = box.schema.space.create('bands');
```

### Format space

```ts
bands.format([
    { name: 'id', type: 'unsigned' },
    { name: 'band_name', type: 'string' },
    { name: 'year', type: 'unsigned' },
]);
```

### Create index

```ts
bands.create_index('primary', { parts: ['id'] });
```

### Insert data

```ts
bands.insert([1, 'Roxette', 1986]);
```

## Tarantool modules usage

To usage some modules, which should be imported into script with Lua keyword `require`, you need first edit your `tsconfig.json` by following algorithm. At example, if you need to import module `log`, add it to tsconfig `compilerOptions.paths`:

```json
{
    "compilerOptions": {
        "paths": {
            "log": ["tarantoolscript/src/log.d.ts"]
        }
    },
    "tstl": {
        "noResolvePaths": [
            "log"
        ]
    }
}
```

Or for module `luatest.helpers`:

```json
{
    "compilerOptions": {
        "paths": {
            "luatest.helpers": ["tarantoolscript/src/luatest.helpers.d.ts"]
        }
    },
    "tstl": {
        "noResolvePaths": [
            "luatest.helpers"
        ]
    }
}
```

Now you can import and use these modules:

```ts
import * as log from 'log';
import * as luatest_helpers from 'luatest.helpers';

log.info(luatest_helpers.uuid(1, 2, 3));
```

After compilation:

```lua
local ____exports = {}
local log = require("log")
local luatest_helpers = require("luatest.helpers")
log.info(luatest_helpers.uuid(1, 2, 3))
return ____exports
```

Of course, to use `luatest` package or other packages which not included into Tarantool default build, you need to install them with [tt rocks](https://www.tarantool.io/en/doc/latest/reference/tooling/tt_cli/rocks/) command.

## More usage examples

[This repository](https://github.com/vitaliy-art/tarantoolscript-samples) contains many useful samples, which are examples of using modules taken from the official Tarantool documentation. Every source file contains in its header link to the corresponding documentation page.

[This repository](https://github.com/vitaliy-art/tarantoolscript-server-example) can help you understanding how to write Tarantool scripts with TarantoolScript.

# Status

Tarantoolscript is under development and not declares many useful Tarantool modules, which will be added in the near future.

Feel free to add [Issue](https://github.com/vitaliy-art/tarantoolscript/issues/new) or create [Pull request](https://github.com/vitaliy-art/tarantoolscript/compare).
