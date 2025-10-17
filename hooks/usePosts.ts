import { useState } from "react";

export type Post = {
    publishedAt: Date;
    title: string;
    href: string;
}

export default function usePosts() {
    const [posts, setPosts] = useState<Post[]>([
        {
            title: 'How to create art with javascript',
            href: 'https://www.google.com',
            publishedAt: new Date()
        }
    ]);

    return posts;
}