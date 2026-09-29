import type { RingSdkApiApps } from './apps.js';
import type { RingSdkApiAuth } from './auth.js';
import type { RingSdkApiConfig } from './config.js';
import type { RingSdkApiDialog } from './dialog.js';
import type { RingSdkApiLogs } from './logs.js';
import type { RingSdkApiToasts } from './toasts.js';
import type { RingSdkApiTopBar } from './top-bar.js';
import type { RingSdkApiUser } from './user.js';
import type { RingSdkApiWebMCP } from './web-mcp.js';

export type * from './apps.js';
export type * from './auth.js';
export type * from './config.js';
export type * from './dialog.js';
export type * from './logs.js';
export type * from './toasts.js';
export type * from './top-bar.js';
export type * from './user.js';
export type * from './web-mcp.js';
export type * from '../../dist/api/top-bar-types.d.ts';

export interface RingSdkApi {
    apps: RingSdkApiApps;
    auth: RingSdkApiAuth;
    config: RingSdkApiConfig;
    dialog: RingSdkApiDialog;
    logs: RingSdkApiLogs;
    toasts: RingSdkApiToasts;
    topBar: RingSdkApiTopBar;
    user: RingSdkApiUser;
    webMCP: RingSdkApiWebMCP;
}
