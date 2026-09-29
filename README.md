# @ringpublishing/ui-sdk-types

TypeScript declarations for the global `RingSDK` API.

The package contains declarations only and has no runtime dependencies. It does not install or initialize `RingSDK` — the SDK itself is provided by the host application.

## Usage

The package's root declaration augments both the global `RingSDK` identifier and `window.RingSDK`:

```ts
RingSDK.api.apps.openApp({
    moduleCodeName: 'example'
});

window.RingSDK.api.topBar.setTitle({
    title: 'Example'
});
```

To enable this, reference the types in your project's ambient declaration file:

```ts
/// <reference types="@ringpublishing/ui-sdk-types" />
```

The package also exports the API types for explicit imports:

```ts
import type { OpenAppParams, RingSdkApi } from '@ringpublishing/ui-sdk-types';
```

## Documentation

- [Profile types](docs/profile-types.md) — `api.auth.getProfile()` declarations compared with `@types/ring-internal__ui-sdk` 4.1.0, and the payloads they were derived from.
