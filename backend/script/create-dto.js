// scripts/create-dto.ts
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM workaround to get __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2];

if (!name) {
  console.error('❌ Please provide a DTO name (e.g. user)');
  process.exit(1);
}

const className = name.charAt(0).toUpperCase() + name.slice(1);

const content = `import { IsString, IsOptional } from 'class-validator';

export class Create${className}Dto {
  @IsString()
  name: string;
}

export class Update${className}Dto {
  @IsOptional()
  @IsString()
  name?: string;
}
`;

const dir = path.resolve(__dirname, `../src/dto`);
await mkdir(dir, { recursive: true });
await writeFile(path.join(dir, `${name}.dto.ts`), content);

console.log(`✅ DTO for "${className}" created at src/${name}s/dto/${name}.dto.ts`);
