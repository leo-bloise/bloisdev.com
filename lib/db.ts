import { Client } from "@neondatabase/serverless";

export function getClient() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        throw new Error("Missing DATABASE_URL in environment");
    }
    return new Client({ connectionString: url });
}


