import { Application, ModulePlugin } from './apps.js';

export type UiPaletteType = 'DARK' | 'LIGHT';

export interface RingResource {
    codeName: string;
    name: string;
    uuid: string;
}

export interface ResourceMetadata {
    [key: string]: unknown;
}

export interface RingClientMetadata extends ResourceMetadata {
    newsletter?: {
        language: string;
    };
    tracking?: {
        name: string;
        tid: string;
    };
}

export interface RingClient extends RingResource {
    author?: string;
    creationDate?: string;
    description?: string;
    id?: number;
    metadata?: RingClientMetadata;
    modificationDate?: string;
}

export interface RingSpaceTypeMetadata extends ResourceMetadata {
    createAdminGroupOnBootstrap?: boolean;
    isAddableFromUi?: boolean;
    ringUuid?: string;
}

export type RingSpaceTypeReference = RingResource;

export interface RingSpaceType extends RingSpaceTypeReference {
    description: string;
    id: number;
    metadata: RingSpaceTypeMetadata;
}

export interface AdminGroup {
    id?: number;
    name: string;
    uuid: string;
}

export interface RingSpace extends RingResource {
    adminGroups: AdminGroup[];
    code: string;
    creationDate?: string;
    description?: string;
    id: string;
    metadata: ResourceMetadata | null;
    modificationDate?: string;
    productCode: string | null;
    ringClient: RingClient;
    ringSpaceType: RingSpaceTypeReference;
    slug: string;
}

export interface ModuleMetadata extends ResourceMetadata {
    documentationUrlDeveloper?: string;
    documentationUrlHelp?: string;
    isAddableFromUi?: boolean;
    uiPaletteTypesSupported?: UiPaletteType[];
}

export interface RingModule extends RingResource {
    applications: ModulePlugin[];
    description: string;
    isUrlExternal: boolean | null;
    legacyCodeName: string | null;
    legacyUuid: string | null;
    menuGroup: string | null;
    menuLabel: string | null;
    menuOrder: number | null;
    menuVisible: boolean;
    metadata: ModuleMetadata;
    ringSpaceType: RingSpaceType;
    url: string;
}

export interface ModuleInstanceMetadata extends ResourceMetadata {
    configuration?: Record<string, unknown>;
}

export interface RingModuleInstance {
    creationDate: string;
    metadata: ModuleInstanceMetadata | null;
    modificationDate: string;
    statusMessage: string | null;
    uuid: string;
}

export interface ProfileGroup {
    code: string;
    id: string;
    name: string;
}

export interface ProfileUser {
    mail: string;
    name: string;
    role: string | null;
    upn: string;
    userId: string;
}

export interface GetProfileResult {
    applications: Application[];
    capabilities: string[];
    clientId: string;
    currentApplication: string;
    currentModule: RingModule;
    currentModuleInstance: RingModuleInstance;
    currentSpace: RingSpace;
    groups: ProfileGroup[];
    language: string;
    user: ProfileUser;
}

export interface RingSdkApiAuth {
    getProfile(): Promise<GetProfileResult>;
}
