import type { HttpAgent } from '@ag-ui/client';

export interface AgentCreateOptions {
    /** UUID of the agent. */
    agentId: string;
    /** UUID of the thread to continue. */
    threadId?: string;
}

/** Agents of the Ring Agents Framework as AG-UI agents. */
export interface RingSdkApiAgents {
    /** An AG-UI `HttpAgent` for the agent, whose `abortRun()` cancels the run and `connectAgent()` loads the thread. */
    createAgent(options: AgentCreateOptions): HttpAgent;
}
