'use client';

import Header from "@/components/Header";
import Posts from "@/components/Posts";
import RotatingCube from "@/components/ui/RotatingCube";
import usePosts from "@/hooks/usePosts";

export default function Home() {
  const posts = usePosts();

  return (
    <main className="flex flex-col w-full gap-y-32">
      <Header />
      <div className="flex justify-center">
        <RotatingCube />
      </div>
      <div className="flex flex-col text-center gap-y-4">
        <p className="text-xl">
          With great powers, comes great responsibility...
        </p>
        <p className="text-md italic">Uncle Ben</p>
      </div>
      {posts.length > 0 && <Posts posts={posts}></Posts>}
    </main>
  );
}
