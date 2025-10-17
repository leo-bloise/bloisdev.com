import PostsLink from "./ui/PostsLink";

export default function Posts({ posts }: { posts: any[]}) {
  return (
    <ul className="flex flex-col gap-y-12 items-center pb-10">
      {posts.map((post, index) => (
        <PostsLink
          key={index}
          date={post.publishedAt}
          title={post.title}
          href={''}
        ></PostsLink>
      ))}
    </ul>
  );
}
