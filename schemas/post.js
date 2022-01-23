export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'youTubeId',
      title: 'YouTube Id',
      description:
        'The ID from your YouTube video. It comes after v= in the Url, like https://www.youtube.com/watch?v=qDjrqLe71w8',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
      description:
        'A short description of this article or video - try to keep it under 250 characters',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'transcript',
      title: 'Transcript',
      type: 'blockContent',
    },
  ],

  orderings: [
    {
      title: 'Publish date new–>old',
      name: 'publishDateDesc',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
