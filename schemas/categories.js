export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'picture',
      title: 'Picture',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
