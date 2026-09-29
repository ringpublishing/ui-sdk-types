export interface RingSdkApiUser {
    getSettings<T>(): Promise<T>;
    saveSettings<T>(settings: T): Promise<T>;
}
