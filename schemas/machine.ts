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
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'stockNumber',
      title: 'Stock #',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'reference',
      to: [{ type: 'subcategory' }],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
