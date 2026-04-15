// schemas/machine.ts

export default {
  name: 'machine',
  title: 'Machine',
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },

    {
      name: 'model',
      title: 'Model',
      type: 'string',
      description: 'Example: VF-2, ST-20, UMC-750',
    },

    {
      name: 'stockNumber',
      title: 'Stock #',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'yearOfMfg',
      title: 'Year of Mfg.',
      type: 'number',
      validation: (Rule: any) =>
        Rule.required()
          .min(1900)
          .max(new Date().getFullYear()),
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the machine, model, year, and key feature',
            },
          ],
        },
      ],
    },

    {
      name: 'videoUrl',
      title: 'Machine Video (YouTube URL)',
      type: 'url',
      description: 'Optional YouTube link',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'specifications',
      title: 'Specifications',
      type: 'text',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
