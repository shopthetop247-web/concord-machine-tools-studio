import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Brand Description',
      type: 'text',
      rows: 6,
      description: '100–300 words recommended for SEO',
    }),

    defineField({
      name: 'website',
      title: 'Official Website',
      type: 'url',
    }),
  ],
});
