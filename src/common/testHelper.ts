import fs from 'fs';
import path from 'path';
import { InputProperties } from './inputProperties';

export function readTestData(fileName: string) {
  const p = path.join(process.cwd(), 'src', 'testData', fileName);
  if (!fs.existsSync(p)) throw new Error(`Test data file not found: ${p}`);
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}

export function getTestInputs(): InputProperties {
  // read ENV or a local config file
  return {
    env: process.env.ENV || 'qa',
    user: process.env.TEST_USER || '',
    password: process.env.TEST_PASSWORD || ''
  };
}
