// scripts/create-schema.js
const fs = require('fs');
const path = require('path');

const FileName = process.argv[2];
if (!FileName) {
  console.error('❌ Please provide a schema name');
  process.exit(1);
}

const className = FileName.charAt(0).toUpperCase() + FileName.slice(1);
const content = `import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ${className}Document = ${className} & Document;

@Schema()
export class ${className} {
  @Prop({ required: true })
  name: string;
}

export const ${className}Schema = SchemaFactory.createForClass(${className});
`;

const dir = `src/${FileName}s/schemas`;
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `${FileName}.schema.ts`), content);

console.log(`✅ Schema ${className} created at ${dir}`);
