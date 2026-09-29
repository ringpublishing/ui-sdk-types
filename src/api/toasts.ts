export type ShowToastParams = any;

export interface RingSdkApiToasts {
    showToast(params: ShowToastParams): Promise<void>;
}
