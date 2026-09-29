import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createAuxiliaryTypeStore, createTypeAlias, type OptionalTypeOverrideFunction, printNode, zodToTs } from 'zod-to-ts';
import * as schemas from '../src/schemas/topbar.schema.js';

const outputDirectoryFlagIndex = process.argv.indexOf('--out-dir');
const packageDirectory = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = outputDirectoryFlagIndex >= 0
    ? resolve(process.argv[outputDirectoryFlagIndex + 1] ?? '')
    : join(packageDirectory, 'dist');

if (!outputDirectory) {
    throw new Error('The --out-dir option requires a directory.');
}

const outputApiDirectory = join(outputDirectory, 'api');
const generatedTypes = Object.entries(schemas)
    .filter(([name, schema]) => name.endsWith('Schema') && schema)
    .map(([name, schema]) => [name.replace(/Schema$/, ''), schema] as const);

const auxiliaryTypeStore = createAuxiliaryTypeStore();
const overrides = new Map();

const overrideFunction: OptionalTypeOverrideFunction = (schema, typescript) => {
    if ((schema as { _def?: { type?: string; }; })._def?.type !== 'function') {
        return undefined;
    }

    return typescript.factory.createFunctionTypeNode(
        undefined,
        [],
        typescript.factory.createKeywordTypeNode(typescript.SyntaxKind.VoidKeyword)
    );
};

const generatedAliases = generatedTypes.map(([name, schema]) => {
    const typeNode = zodToTs(schema, {
        auxiliaryTypeStore,
        overrides,
        overrideFunction,
        unrepresentable: 'any',
        io: 'input'
    }).node;

    return printNode(createTypeAlias(typeNode, name))
        .replace(`type ${name}`, `export type ${name}`)
        .replaceAll('"', '\'');
});

const output = [
    ...generatedAliases,
    ...Array.from(auxiliaryTypeStore.definitions.values(), ({ node }) => printNode(node)),
    ''
].join('\n');

await mkdir(outputApiDirectory, { recursive: true });
await writeFile(join(outputApiDirectory, 'top-bar-types.d.ts'), output);
