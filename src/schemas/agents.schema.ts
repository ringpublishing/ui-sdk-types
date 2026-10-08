import * as z from 'zod';
import { en } from 'zod/locales';

// As in topbar.schema.ts: the namespace import leaves zod's locales out, so the English messages are set here.
z.config(en());

/** Id of an agent or a thread, as the API takes it. */
export const AgentIdSchema = z.guid();

export const AgentCreateOptionsSchema = z.object({
    agentId: AgentIdSchema,
    threadId: AgentIdSchema.optional()
});
