Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/myproject/packages/B/package.json]
{"main":"lib/index.js","types":"lib/index.d.ts"}

//// [/user/username/projects/myproject/packages/A/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"],"references":[{"path":"../B"}]}

//// [/user/username/projects/myproject/packages/B/tsconfig.json]
{"compilerOptions":{"outDir":"lib","rootDir":"src","composite":true},"include":["src"]}

//// [/user/username/projects/myproject/packages/A/src/index.ts]
import { foo } from '@issue/b';
import { bar } from '@issue/b/lib/bar';
foo();
bar();


//// [/user/username/projects/myproject/packages/B/src/index.ts]
export function foo() { }

//// [/user/username/projects/myproject/packages/B/src/bar.ts]
export function bar() { }

//// [/user/username/projects/myproject/node_modules/@issue/b] symlink(/user/username/projects/myproject/packages/B)
//// [/user/username/projects/myproject/packages/B/lib/bar.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bar = void 0;
function bar() { }
exports.bar = bar;


//// [/user/username/projects/myproject/packages/B/lib/bar.d.ts]
export declare function bar(): void;


//// [/user/username/projects/myproject/packages/B/lib/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
function foo() { }
exports.foo = foo;


//// [/user/username/projects/myproject/packages/B/lib/index.d.ts]
export declare function foo(): void;


//// [/user/username/projects/myproject/packages/B/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","./src/bar.ts","./src/index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"1045484683-export function bar() { }","signature":"-2904461644-export declare function bar(): void;\n"},{"version":"4646078106-export function foo() { }","signature":"-5677608893-export declare function foo(): void;\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3],"latestChangedDtsFile":"./lib/index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/B/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/bar.ts",
      "./src/index.ts"
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./src/bar.ts": {
        "original": {
          "version": "1045484683-export function bar() { }",
          "signature": "-2904461644-export declare function bar(): void;\n"
        },
        "version": "1045484683-export function bar() { }",
        "signature": "-2904461644-export declare function bar(): void;\n"
      },
      "./src/index.ts": {
        "original": {
          "version": "4646078106-export function foo() { }",
          "signature": "-5677608893-export declare function foo(): void;\n"
        },
        "version": "4646078106-export function foo() { }",
        "signature": "-5677608893-export declare function foo(): void;\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/bar.ts",
      "./src/index.ts"
    ],
    "latestChangedDtsFile": "./lib/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 951
}

//// [/user/username/projects/myproject/packages/A/lib/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b_1 = require("@issue/b");
var bar_1 = require("@issue/b/lib/bar");
(0, b_1.foo)();
(0, bar_1.bar)();


//// [/user/username/projects/myproject/packages/A/lib/index.d.ts]
export {};


//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../b/lib/index.d.ts","../b/lib/bar.d.ts","./src/index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-5677608893-export declare function foo(): void;\n","-2904461644-export declare function bar(): void;\n",{"version":"8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n","signature":"-3531856636-export {};\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,3,2],"latestChangedDtsFile":"./lib/index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../b/lib/index.d.ts",
      "../b/lib/bar.d.ts",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "../b/lib/index.d.ts",
        "../b/lib/bar.d.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../b/lib/index.d.ts": {
        "version": "-5677608893-export declare function foo(): void;\n",
        "signature": "-5677608893-export declare function foo(): void;\n"
      },
      "../b/lib/bar.d.ts": {
        "version": "-2904461644-export declare function bar(): void;\n",
        "signature": "-2904461644-export declare function bar(): void;\n"
      },
      "./src/index.ts": {
        "original": {
          "version": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {
      "./src/index.ts": [
        "../b/lib/index.d.ts",
        "../b/lib/bar.d.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/index.ts",
      "../b/lib/bar.d.ts",
      "../b/lib/index.d.ts"
    ],
    "latestChangedDtsFile": "./lib/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1036
}


/a/lib/tsc.js --w --p /user/username/projects/myproject/packages/A/tsconfig.json
Output::
>> Screen clear
[[90m12:01:13 AM[0m] Starting compilation in watch mode...

[[90m12:01:20 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/myproject/packages/A/src/index.ts"]
Program options: {"outDir":"/user/username/projects/myproject/packages/A/lib","rootDir":"/user/username/projects/myproject/packages/A/src","composite":true,"configFilePath":"/user/username/projects/myproject/packages/A/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/packages/B/src/index.ts
/user/username/projects/myproject/packages/B/src/bar.ts
/user/username/projects/myproject/packages/A/src/index.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/packages/B/src/index.ts
/user/username/projects/myproject/packages/B/src/bar.ts
/user/username/projects/myproject/packages/A/src/index.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/packages/b/src/index.ts (used version)
/user/username/projects/myproject/packages/a/src/index.ts (computed .d.ts)
/user/username/projects/myproject/packages/b/src/bar.ts (used version)

PolledWatches::
/user/username/projects/myproject/packages/a/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/a/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/packages/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/packages/a/tsconfig.json:
  {}
/user/username/projects/myproject/packages/b/tsconfig.json:
  {}
/user/username/projects/myproject/packages/a/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/index.ts:
  {}
/user/username/projects/myproject/packages/b/src/bar.ts:
  {}
/a/lib/lib.d.ts:
  {}
/user/username/projects/myproject/packages/b/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/packages/b/src:
  {}
/user/username/projects/myproject/packages/a/src:
  {}
/user/username/projects/myproject/node_modules:
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/packages/A/lib/index.js] file written with same contents
//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../b/src/index.ts","../b/src/bar.ts","./src/index.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"4646078106-export function foo() { }","1045484683-export function bar() { }",{"version":"8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n","signature":"-3531856636-export {};\n"}],"options":{"composite":true,"outDir":"./lib","rootDir":"./src"},"fileIdsList":[[2,3]],"referencedMap":[[4,1]],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,4,3,2],"latestChangedDtsFile":"./lib/index.d.ts"},"version":"FakeTSVersion"}

//// [/user/username/projects/myproject/packages/A/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../../a/lib/lib.d.ts",
      "../b/src/index.ts",
      "../b/src/bar.ts",
      "./src/index.ts"
    ],
    "fileNamesList": [
      [
        "../b/src/index.ts",
        "../b/src/bar.ts"
      ]
    ],
    "fileInfos": {
      "../../../../../../a/lib/lib.d.ts": {
        "original": {
          "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
          "affectsGlobalScope": true
        },
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "../b/src/index.ts": {
        "version": "4646078106-export function foo() { }",
        "signature": "4646078106-export function foo() { }"
      },
      "../b/src/bar.ts": {
        "version": "1045484683-export function bar() { }",
        "signature": "1045484683-export function bar() { }"
      },
      "./src/index.ts": {
        "original": {
          "version": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n",
          "signature": "-3531856636-export {};\n"
        },
        "version": "8545527381-import { foo } from '@issue/b';\nimport { bar } from '@issue/b/lib/bar';\nfoo();\nbar();\n",
        "signature": "-3531856636-export {};\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./lib",
      "rootDir": "./src"
    },
    "referencedMap": {
      "./src/index.ts": [
        "../b/src/index.ts",
        "../b/src/bar.ts"
      ]
    },
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../../a/lib/lib.d.ts",
      "./src/index.ts",
      "../b/src/bar.ts",
      "../b/src/index.ts"
    ],
    "latestChangedDtsFile": "./lib/index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1004
}

