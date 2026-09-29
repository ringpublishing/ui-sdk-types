export interface SendUIEventParams {
    category: string;
    metadata?: Record<string, string | number | boolean>;
    name: string;
    value?: number;
}

export interface StartMeasuredUIEventParams {
    id: string;
}

export interface StopMeasuredUIEventParams {
    category: string;
    id: string;
    metadata?: Record<string, string | number | boolean>;
    name: string;
}

export interface SendUIChangeViewParams {
    sourceViewName?: string | null;
    targetViewName: string;
}

export interface RingSdkApiLogs {
    sendUIChangeView(params: SendUIChangeViewParams): Promise<void>;
    sendUIEvent(params: SendUIEventParams): Promise<void>;
    startMeasuredUIEvent(params: StartMeasuredUIEventParams): Promise<void>;
    stopMeasuredUIEvent(params: StopMeasuredUIEventParams): Promise<void>;
}
