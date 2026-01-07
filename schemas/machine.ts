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
      validation: Rule => Rule.required()
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'stockNumber',
      title: 'Stock #',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'yearOfMfg',
      title: 'Year of Mfg.',
      type: 'number',
      validation: Rule => Rule.required()
        .min(1900)
        .max(new Date().getFullYear())
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      options: { hotspot: true } // allows cropping/focusing
    },
    {
      name: 'videoUrl',
      title: 'Machine Video (YouTube URL)',
      type: 'url',
      description: 'Paste a YouTube link for this machine (optional)',
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
      type: 'text'
    }
    // Price field removed
  ]
}
