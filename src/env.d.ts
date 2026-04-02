/// <reference types="astro/client" />

interface Env {
	DB: D1Database;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
	interface Locals extends Runtime {}
}
