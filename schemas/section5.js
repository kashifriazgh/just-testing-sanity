export default {
  name: 'section5',
  title: 'Section 5',
  type: 'object',
  fields: [
    {
      name: 'sectionHeading',
      title: 'Section Heading',
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
            { title: 'h6CG', value: 'h6CG' },
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
      ],
    },

    {
      name: 'tableContent',
      title: 'Table Content',
      type: 'string',
    },
    {
      name: 'tableData',
      title: 'Table Data',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tip',
      title: 'Tip',
      type: 'string',
    },
    {
      name: 'lastContent',
      title: 'Last Content',
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
      ],
    },
  ],
};
