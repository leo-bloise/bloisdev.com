import { getClient } from "./db";

export type PostRow = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
};

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
    } catch (err: unknown) {
        console.error("Error fetching posts from DB:", err);
        throw err;
    } finally {
        await client.end();
    }
}

export async function getPostFromDb(id: string): Promise<PostRow | null> {
    const client = getClient();

    const query = 'select id, title, content, created_at from posts where id = $1';
    const values = [id];

    try {
        await client.connect();

        const res = await client.query(query, values);
        
        if(res.rowCount == 0) return null;

        return {
            ...res.rows[0],
            created_At: new Date(res.rows[0].created_at)
        } as PostRow;
    } catch (err: unknown) {
        console.error("Error fetching post from DB:", err);
        throw err;
    } finally {
        await client.end();
    }
}