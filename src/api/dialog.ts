import { ButtonType } from '../constants/button-types.js';

export interface DialogButton {
    default?: boolean;
    label: string;
    name: string;
    primary?: boolean;
    style?: ButtonType;
}

export interface CreateConfirmDialogLabels {
    no: string;
    report: string;
    yes: string;
}

export interface DialogInputLabels {
    inputPlaceholder?: string;
    title?: string;
    titleOptional?: string;
}

export interface DialogInput {
    displayCounter?: boolean;
    labels?: DialogInputLabels;
    value?: string;
    warningThreshold?: number;
}

export interface CreateDialogParams {
    buttons: DialogButton[];
    content: string;
    title: string;
}

export interface CreateDialogParamsWithInput extends CreateDialogParams {
    input: DialogInput;
}

export interface DialogResponse {
    response: string;
    value?: string;
}

export interface RingSdkApiDialog {
    closeDialog(): Promise<void>;
    createConfirmDialog(title: string, content: string, labels?: CreateConfirmDialogLabels, report?: boolean): Promise<string>;
    createDialog(params: CreateDialogParamsWithInput): Promise<DialogResponse>;
    createDialog(params: CreateDialogParams): Promise<string>;
}
