import type { SanityDocument } from "@sanity/client";
import Link from "next/link";

const Posts = ({ posts = [] }: { posts: SanityDocument[] }) => {
  const numberOfPosts = posts.length === 1 ? `1 post` : `${posts.length} posts`;

  return (
    <div className="mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <p className="text-zinc-400 font-mono">{numberOfPosts}</p>
      {posts.map((post) =>
        <Link
        className="p-4 text-teal-50 hover:underline hover:opacity-90 underline-offset-2"
        key={post._id}
        href={post.slug.current}>
          <h2 className="font-medium">{post.title}</h2>
        </Link>
      )}
    </div>
    );
  };

export default Posts;
