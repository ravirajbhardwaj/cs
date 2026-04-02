import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';

const sqlite = new Database(process.env.DB!);
export const db = drizzle({ client: sqlite });
