import { Post } from "@/hooks/usePosts";
import PostsLink from "./ui/PostsLink";

export default function Posts({ posts }: { posts: Post[]}) {
  return (
    <ul className="flex flex-col gap-y-12 items-center pb-10">
      {posts.map((post, index) => (
        <PostsLink
          key={index}
          date={post.publishedAt}
          title={post.title}
          href={post.href}
        ></PostsLink>
      ))}
    </ul>
  );
}
