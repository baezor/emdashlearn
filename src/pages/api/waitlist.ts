import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, locals, redirect }) => {
	const { env } = locals.runtime;

	const data = await request.formData();
	const email = data.get("email")?.toString().trim().toLowerCase();

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return redirect("/?error=invalid", 302);
	}

	try {
		await env.DB.prepare("INSERT INTO waitlist (email) VALUES (?)")
			.bind(email)
			.run();
	} catch (e: unknown) {
		// Duplicate email — treat as success so we don't leak whether an email is registered
		const msg = e instanceof Error ? e.message : String(e);
		if (!msg.includes("UNIQUE constraint failed")) {
			return redirect("/?error=server", 302);
		}
	}

	return redirect("/?success=true", 302);
};
