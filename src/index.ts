import type { RingSdkApi } from './api/index.js';
import type { RingSdkConstants } from './constants/index.js';
import type { RingSdkParams } from './params/index.js';

export type * from './api/index.js';
export type * from './constants/index.js';
export type * from './params/index.js';

export interface RingSdkGlobal {
    api: RingSdkApi;
    constants: RingSdkConstants;
    params: RingSdkParams;
}

declare global {
    const RingSDK: RingSdkGlobal;
    interface Window {
        RingSDK: RingSdkGlobal;
    }
}
