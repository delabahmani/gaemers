import Image from "next/image";
import { sanityFetch } from "../../sanity/lib/fetch";
import { postsQuery } from "../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Posts from "./components/Posts";

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });

  return (
    <main className="mx-auto min-h-screen items-center justify-between px-4 py-16">
      <h1 className=" py-10 text-5xl text-center font-semibold font-mono">
        welcome gaemers
      </h1>
      <Posts posts={posts}></Posts>
    </main>
  );
}

export const revalidate = 10;