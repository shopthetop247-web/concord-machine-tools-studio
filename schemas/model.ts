import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'model',
  title: 'Machine Model',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Model Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Example: VF-2, Integrex i-200, LB3000',
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
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'SEO Description (HTML)',
      type: 'text',
      rows: 10,
      description: 'Full SEO content for this model page (HTML allowed)',
    }),

    defineField({
      name: 'commonApplications',
      title: 'Common Applications',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Aerospace, Automotive, Job Shop, Mold Making, etc.',
    }),

    defineField({
      name: 'popularIndustries',
      title: 'Industries',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
