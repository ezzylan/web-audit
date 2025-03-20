/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `analyze` command */
  export type Analyze = ExtensionPreferences & {}
  /** Preferences accessible in the `info` command */
  export type Info = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `analyze` command */
  export type Analyze = {
  /** https://raycast.com */
  "url": string
}
  /** Arguments passed to the `info` command */
  export type Info = {
  /** https://raycast.com */
  "url": string
}
}

