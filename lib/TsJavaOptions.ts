'use strict';

import AsyncOptions = require('./AsyncOptions');

// ### TsJavaOptions

// TsJavaOptions is the json structure we expect to find in package.json under the key 'tsjava'
interface TsJavaOptions {
  classpath: Array<string>;
    // The java class path, i.e. an array paths to .jars or .class files.
    // Note: ts-java allows glob expressions here, e.g. 'target/**/*.jar'.
    // However ClassesMap expects this to be an expanded array of file paths.

  classes?: Array<string>;
    // The set of java classes the application requires, for finer-grained control than packages.

  packages?: Array<string>;
    // A set of packages class paths for packages to include.
    // All classes in each of these packages will be included.

  javaTypingsPath?: string;
    // The path to typings/java/java.d.ts. Defaults to 'typings/java/java.d.ts'.

  debugTypingsPath?: string;
    // The path to typings/debug/debug.d.ts to use in tsJavaModule.ts.
    // If undefined, don't generate debug code in tsJavaModule.ts

  tsJavaModulePath?: string;
    // The path where ts-java will write the generated typescript source module.
    // Defaults to 'tsJavaModule.ts'.

  asyncOptions?: AsyncOptions;
    // The asyncOptions which will be used to initalize Java.
    // Note, currently it is up to the developer to ensure the options specified here match
    // the options used to initalize the java module.

  generics?: boolean;
    // If true, the output tsJavaModule.ts file will map Java generics to Typescript generics.
    // Defaults to false.
}

export = TsJavaOptions;
