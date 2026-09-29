import type { SetActionsParams, SetAvatarsParams, SetMoreActionsParams, SetStateParams, SetTitleInput } from '../../dist/api/top-bar-types.d.ts';
import { ButtonType } from '../constants/index.js';

export type * from '../../dist/api/top-bar-types.d.ts';

export type SetTitleParams = Exclude<SetTitleInput, string | null | undefined>;
export type ActionItem = SetActionsParams[number];
export type ButtonAction = Extract<ActionItem, { type: 'button'; }>;
export type IconAction = Extract<ActionItem, { type: 'icon'; }>;
export type SelectAction = Extract<ActionItem, { type: 'select'; }>;
export type DropdownAction = NonNullable<ButtonAction['actions']>[number];
export type MoreActionItem = SetMoreActionsParams[number];
export type AvatarItem = SetAvatarsParams['items'][number];
export type SelectItem = SelectAction['items'][number];
export type Color = NonNullable<NonNullable<SelectItem['indicator']>['color']>;
export type BadgeConfig = NonNullable<SetTitleParams['labels']>[number];
export type PrefixConfig = NonNullable<SetTitleParams['prefix']>;
export type SubtitleConfig = NonNullable<SetTitleParams['subtitle']>;
export type ChipConfig = NonNullable<MoreActionItem['chip']>;

export { TopBarState } from '../constants/top-bar-states.js';

export interface SetButtonsButtonsConfigAction {
    disabled?: boolean;
    disabledReason?: string;
    href?: string;
    name: string;
    onClick?(): void;
}

export interface SetButtonsButtonsConfig {
    actions?: SetButtonsButtonsConfigAction[];
    disabled?: boolean;
    disabledActions?: boolean;
    disabledActionsReason?: string;
    disabledMainBtn?: boolean;
    disabledMainBtnReason?: string;
    disabledReason?: string;
    href?: string;
    isFlat?: boolean;
    isPrimary?: boolean;
    label: string;
    prefix?: string;
    type?: ButtonType;
    onClick?(): void;
}

export interface SetDropdownButtonsConfigChip {
    label: string;
    variant: string;
}

export interface SetDropdownButtonsConfig {
    chip?: SetDropdownButtonsConfigChip;
    disabled?: boolean;
    disabledReason?: string;
    hasSeparatorAfter?: boolean;
    hasSeparatorBefore?: boolean;
    href?: string;
    icon?: string;
    label: string;
    materialIcon?: string;
    onClick?(): void;
}

export interface RingSdkApiTopBar {
    setActions(actions: SetActionsParams): Promise<void>;
    setMoreActions(items: SetMoreActionsParams): Promise<void>;
    setTitle(titleParams?: SetTitleInput): Promise<void>;
    setAvatars(params: SetAvatarsParams): Promise<void>;
    setState(state: SetStateParams): Promise<void>;
    /** @deprecated Use setActions instead. */
    setButtons(buttonsConfig: SetButtonsButtonsConfig[]): Promise<void>;
    /** @deprecated Use setMoreActions instead. */
    setDropdown(buttonsConfig?: SetDropdownButtonsConfig[]): Promise<void>;
}
