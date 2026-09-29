import { OpenMode } from '../constants/index.js';

export interface Application {
    codeName: string;
    name: string;
}

export enum ModulePluginType {
    PLUGIN = 'PLUGIN',
    UI = 'UI'
}

export interface ModulePlugin {
    codeName: string;
    isMain: boolean;
    name?: string;
    route: string | null;
    slug: string;
    type: ModulePluginType;
    url: string;
    uuid: string;
}

export interface EmbedAppOptions {
    customClasses?: string;
    height?: string;
    width?: string;
}

export interface EmbedAppParams {
    initialData?: any;
    options?: EmbedAppOptions;
    path?: string;
    query?: string;
    target: string;
}

export interface OpenAppParams {
    /**
     * @deprecated Use `moduleCodeName` instead.
     */
    appCode?: string;
    moduleApplicationCodeName?: string;
    moduleCodeName?: string;
    params?: {
        initialData?: Record<string, any>;
        options?: {
            mode?: OpenMode;
        };
        path?: string;
        query?: Record<string, any>;
        /**
         * @deprecated Use `spaceCodeName` instead.
         */
        space?: string;
        spaceCodeName?: string;
    };
    title?: string;
    trackingEvent?: {
        sourceViewName?: string;
        targetViewName: string;
    };
}

export interface GenerateAppUrlParams {
    initialData?: Record<string, any>;
    moduleApplicationCodeName?: string;
    moduleCodeName: string;
    path?: string;
    proxied?: boolean;
    query?: Record<string, any>;
}

export interface EmbedApplicationParams {
    moduleApplicationCodeName?: string;
    moduleCodeName: string;
    name: string;
    params?: {
        initialData?: Record<string, any>;
        options?: Record<string, any>;
        path?: string;
        pluginId?: string;
        query?: Record<string, any>;
        target?: string;
    };
}

export interface RingSdkApiApps {
    closeApp<T>(data?: T): Promise<void>;
    /**
     * @deprecated Use another implementation instead.
     */
    embedApp(codeName: string, name: string, params: EmbedAppParams): Promise<HTMLIFrameElement>;
    embedApp(params: EmbedApplicationParams): Promise<HTMLIFrameElement>;
    /**
     * @deprecated Use another implementation instead.
     */
    generateAppUrl(codeName: string, path?: string, query?: string, initialData?: any, proxied?: boolean): Promise<string>;
    generateAppUrl(params: GenerateAppUrlParams): Promise<string>;
    getApplications(): Promise<Application[]>;
    getInitialData<T>(): Promise<T>;
    getModulePlugins(): Promise<ModulePlugin[]>;
    openApp<T>(params: OpenAppParams): Promise<T>;
    redirectTo(url: string | URL, target?: string): WindowProxy | null;
}
