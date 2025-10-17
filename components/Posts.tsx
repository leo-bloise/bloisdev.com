import PostsLink from "./ui/PostsLink";

type Props = {
  posts: {
    publishedAt: Date;
    title: string;
    id: string;
  }[]
}

export default function Posts({ posts }: Props) {
  return (
    <ul className="flex flex-col gap-y-12 items-center pb-10">
      {posts.map((post, index) => (
        <PostsLink
          key={index}
          date={post.publishedAt}
          title={post.title}
          href={`/post/${post.id}`}
        ></PostsLink>
      ))}
    </ul>
  );
}
