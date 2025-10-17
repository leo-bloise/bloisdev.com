import { Client } from "@neondatabase/serverless";

export type PostRow = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
};

function getClient() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        throw new Error("Missing NEON_DATABASE_URL in environment");
    }
    return new Client({ connectionString: url });
}

export async function getPostsFromDb() {
    const client = getClient();

    try {
        await client.connect();
        
        const res = await client.query("select id, title, content, created_at from posts order by created_at desc");
        const rows = res.rows as PostRow[];
        
        return rows.map((r) => ({
            id: r.id,
            title: r.title,
            content: r.content,
            createdAt: new Date(r.created_at),
        }));
    } catch(err: unknown) {
        console.error("Error fetching posts from DB:", err);
        throw err;
    } finally {
        await client.end();
    }
}
