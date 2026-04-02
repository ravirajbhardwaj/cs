import { Hono } from "hono";

const app = new Hono();

const server = Bun.serve({
  port: 3000,
  fetch: app.fetch
})

console.log(`API is running at ${server.url}`);