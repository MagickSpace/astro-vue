/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare module '*.astro' {
    const Component: Astro.Component
    export default Component
  }