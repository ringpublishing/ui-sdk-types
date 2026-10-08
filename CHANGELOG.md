# CHANGELOG
The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## 1.1.0 - 2026-09-29
### Added
- Declarations of `api.agents.createAgent`, which returns an AG-UI `HttpAgent`; `@ag-ui/client` 0.0.59 is a dependency for its types.

## 1.0.1 - 2026-09-29
### Changed
- The TopBar schema does not require a button's dropdown `actions` to be non-empty or any field in the `setTitle` configuration object, because the published types do not check either.

## 1.0.0 - 2026-09-11
### Added
- Introduced `@ringpublishing/ui-sdk-types`: public TypeScript declarations for the global `RingSDK` API (`api`, `constants`, `params`), generated from the source zod schemas by the package's type-generation script.
- Profile declarations for `api.auth.getProfile()` follow the real payload: `currentApplication`, `currentModule` and `currentModuleInstance` with arbitrary per-instance `metadata.configuration`, nullable fields typed as such, backend values as unions, and `ModulePlugin` with a nullable `route` and no `name`.
- Declarations-only package surface: `exports` exposes `dist/index.d.ts` as types only, there is no `main` or `engines`, `sideEffects` is `false`, and the single dependency is the dependency-free `@mcp-b/webmcp-types` for the WebMCP interfaces. The zod schemas stay internal to the monorepo and are not published.
