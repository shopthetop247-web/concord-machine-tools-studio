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
      name: 'specifications',
      title: 'Specifications',
      type: 'text'
    }
    // Price field removed
  ]
}
