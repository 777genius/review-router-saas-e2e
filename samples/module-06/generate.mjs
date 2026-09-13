import { readFileSync, writeFileSync } from 'node:fs';
const spec = JSON.parse(readFileSync('api.json', 'utf8'));
const operation = spec.paths['/users/{id}'].get;
if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(operation.operationId)) {
  throw new Error('Invalid export identifier');
}
writeFileSync('client.mjs', 'export async function ' + operation.operationId +
  '(transport, id) { return transport("GET", "/users/" + encodeURIComponent(id)); }\n');
