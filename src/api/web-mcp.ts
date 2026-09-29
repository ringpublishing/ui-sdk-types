import type { RegistrationHandle, ToolDescriptor, ToolListItem } from '@mcp-b/webmcp-types';

export interface RegisterToolParams {
    tool: ToolDescriptor;
}

export interface RingSdkApiWebMCP {
    listTools(): Promise<ToolListItem[]>;
    registerTool(params: RegisterToolParams): Promise<RegistrationHandle | undefined>;
    unregisterTool(name: string): Promise<void>;
}
