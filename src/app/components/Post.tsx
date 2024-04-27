"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import { client } from "@/../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const builder = imageUrlBuilder(client);

const Post = ({ post }: { post: SanityDocument }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const getRandomBackgroundClass = () => {
    const classes = ['bg-1', 'bg-2', 'bg-3'];
    const randomIndex = Math.floor(Math.random() * classes.length);
    return classes[randomIndex];
  }

  const randomClass = getRandomBackgroundClass();

  return (
    <main className="mx-auto prose dark:prose-invert prose-xl prose-h2:text-center prose-p:text-teal-50 px-4 py-12">
      <h1 className={`post-header text-center text-5xl ${randomClass}`}>{post?.title}</h1>
      <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {post?.gallery?.map((imageObject: any, index: any) => {
          return (
            <div key={index}>
              <Image
                className="mx-auto w-[300px] h-[250px] object-cover "
                src={builder
                  .image(imageObject.image)
                  .width(700)
                  .height(600)
                  .url()}
                alt={imageObject.alt}
                width={700}
                height={600}
              />
            </div>
          );
        })}
      </Slider>
      </div>
      <div className="prose-h2:text-teal-50 prose-h2:mt-2  prose-h4:text-gray-400 prose-p:text-base ">
      {post?.body ? <PortableText value={post.body} /> : null}
      </div>
    </main>
  );
};

export default Post;
