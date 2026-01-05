import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'machine',
  title: 'Machine',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Machine Name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'stockNumber', title: 'Stock #', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }], validation: Rule => Rule.required() }),
    defineField({ name: 'subcategory', title: 'Subcategory', type: 'reference', to: [{ type: 'subcategory' }], validation: Rule => Rule.required() }),
    defineField({ name: 'brand', title: 'Brand', type: 'string' }),
    defineField({ name: 'model', title: 'Model', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'number' }),
    defineField({ name: 'condition', title: 'Condition', type: 'string' }),
    defineField({ name: 'specs', title: 'Specifications', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['Available', 'Sold'] }, initialValue: 'Available' })
  ]
})
