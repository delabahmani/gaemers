import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "alt",
              title: "Alternative Text",
              type: "string",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "gallery.0.image",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});

