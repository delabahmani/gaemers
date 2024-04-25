"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  if (!post) {
    return <div className="font-mono text-xl">404: post not found</div>
  }
  return (
    <main className="container mx-auto prose dark:prose-invert prose-xl px-4 py-16">
      <h1 className="text-center">{post.title}</h1>
      {post?.mainImage ? (
        <Image
          className="mx-auto"
          src={builder.image(post.mainImage).width(300).height(300).url()}
          alt={post?.mainImage?.alt}
          width={300}
          height={300}
        />
      ) : null}
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
};

export default Post;
