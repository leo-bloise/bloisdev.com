import { Client } from "@neondatabase/serverless";

export function getClient() {
    const url = process.env.NEON_DATABASE_URL;
    if (!url) {
        throw new Error("Missing NEON_DATABASE_URL in environment");
    }
    return new Client({ connectionString: url });
}


