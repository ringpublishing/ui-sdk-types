import { z } from 'zod';
import { TopBarState } from '../constants/top-bar-states.js';
// ─── Shared ───────────────────────────────────────────────────────────────────

const ColorSchema = z.enum([
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning'
]);

const BadgeConfigSchema = z.object({
    text: z.string(),
    color: ColorSchema
});

const PrefixConfigSchema = z.object({
    text: z.string(),
    color: ColorSchema.optional(),
    variant: ColorSchema.optional()
}).refine((value) => Boolean(value.color || value.variant), {
    message: 'prefix requires color or variant'
});

const SubtitleConfigSchema = z.object({
    text: z.string(),
    icon: z.string().optional()
});

const ChipConfigSchema = z.object({
    label: z.string()
});

// ─── setTitle ────────────────────────────────────────────────────────────────

const SetTitleParamsSchema = z.object({
    title: z.union([z.string(), z.null()]).optional(),
    prefix: PrefixConfigSchema.optional(),
    labels: z.array(BadgeConfigSchema).optional(),
    subtitle: SubtitleConfigSchema.optional()
});

export const SetTitleInputSchema = z.union([z.string(), SetTitleParamsSchema, z.null()]).optional();

// ─── setAvatars ──────────────────────────────────────────────────────────────

const AvatarItemSchema = z.object({
    name: z.string(),
    status: z.string(),
    uuid: z.string()
});

export const SetAvatarsParamsSchema = z.object({
    items: z.array(AvatarItemSchema)
});

// ─── setActions ──────────────────────────────────────────────────────────────

const DropdownActionSchema = z.object({
    label: z.string(),
    href: z.string().optional(),
    onClick: z.function().optional(),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional(),
    icon: z.string().optional()
}).refine((value) => Boolean(value.href || value.onClick), {
    message: 'dropdown action requires href or onClick'
});

const ButtonActionSchema = z.object({
    type: z.literal('button'),
    label: z.string(),
    appearance: z.enum(['primary', 'secondary', 'tertiary']),
    icon: z.string().optional(),
    href: z.string().optional(),
    onClick: z.function().optional(),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional(),
    actions: z.array(DropdownActionSchema).optional()
}).refine((value) => Boolean(value.href || value.onClick || value.actions), {
    message: 'button action requires href, onClick, or actions'
});

const IconActionSchema = z.object({
    type: z.literal('icon'),
    label: z.string(),
    icon: z.string(),
    onClick: z.function(),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional()
});

const HexColorSchema = z.string().regex(/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/);

const IndicatorConfigSchema = z.object({
    color: z.union([ColorSchema, HexColorSchema])
});

const SelectItemSchema = z.object({
    label: z.string(),
    isSelected: z.boolean(),
    indicator: IndicatorConfigSchema.optional(),
    onClick: z.function(),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional()
});

const SelectActionSchema = z.object({
    type: z.literal('select'),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional(),
    items: z.array(SelectItemSchema).min(1)
});

const ActionItemSchema = z.union([
    ButtonActionSchema,
    IconActionSchema,
    SelectActionSchema
]);

export const SetActionsParamsSchema = z.array(ActionItemSchema);

// ─── setMoreActions ──────────────────────────────────────────────────────────

const MoreActionItemSchema = z.object({
    label: z.string(),
    icon: z.string().optional(),
    href: z.string().optional(),
    onClick: z.function().optional(),
    disabled: z.boolean().optional(),
    disabledReason: z.string().optional(),
    hasSeparatorBefore: z.boolean().optional(),
    hasSeparatorAfter: z.boolean().optional(),
    chip: ChipConfigSchema.optional()
}).refine((value) => Boolean(value.href || value.onClick), {
    message: 'more action requires href or onClick'
});

export const SetMoreActionsParamsSchema = z.array(MoreActionItemSchema);

// ─── setState ─────────────────────────────────────────────────────────────
const TopBarStateSchema = z.enum([
    TopBarState.DEFAULT,
    TopBarState.MODIFIED,
    TopBarState.ERROR
] as const);

export const SetStateParamsSchema = TopBarStateSchema;

// Local types are the source of truth for the runtime SDK and public export.
