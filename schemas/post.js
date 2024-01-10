export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    // Default props
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Urdu', value: 'urdu' },
            { title: 'UrduBlue', value: 'urduBlue' },
            { title: 'UrduH3', value: 'urduH3' },
            { title: 'UrduH3R', value: 'urduH3R' },
            { title: 'h1CG', value: 'h1CG' },
            { title: 'h2CG', value: 'h2CG' },
            { title: 'h3CG', value: 'h3CG' },
            { title: 'h6CG', value: 'h3CG' },
            { title: 'h1R', value: 'h1R' },
            { title: 'h2R', value: 'h2R' },
            { title: 'h3R', value: 'h3R' },
            { title: 'h6R', value: 'h6R' },
            { title: 'h3BGY', value: 'h3BGY' },
            { title: 'h3BGR', value: 'h3BGR' },
            { title: 'h3BGB', value: 'h3BGB' },
            { title: 'Hero', value: 'hero' },
          ],
        },
        {
          type: 'image',
          marks: ['link'],
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              options: {
                isHighlighted: true, // This makes the field prominent in the CMS
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'opening',
      title: 'Opening',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },

    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'categories' }],
    },
    {
      name: 'postType',
      title: 'Post Type',
      type: 'reference',
      to: [{ type: 'postType' }],
    },
    // Section 2
    {
      name: 'section2',
      title: 'Section 2',
      type: 'section2',
    },
    // Section 3
    {
      name: 'section3',
      title: 'Section 3',
      type: 'section3',
    },

    // Section Heading 4
    {
      name: 'section4',
      title: 'Section 4',
      type: 'section4',
    },

    // Section 5
    {
      name: 'section5',
      title: 'Section 5',
      type: 'section5',
    },

    // Section 6
    {
      name: 'section6',
      title: 'Section 6',
      type: 'section6',
    },
    {
      name: 'section7',
      title: 'Section 7',
      type: 'section7',
    },
    {
      name: 'section8',
      title: 'Section 8',
      type: 'section8',
    },
    {
      name: 'section9',
      title: 'Section 9',
      type: 'section9',
    },
    {
      name: 'section10',
      title: 'Section 10',
      type: 'section10',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
