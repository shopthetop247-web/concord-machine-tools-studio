// schemas/schema.ts

import { createSchema } from 'sanity'
import category from './category'
import subcategory from './subcategory'
import machine from './machine'

export default createSchema({
  name: 'default',
  types: [category, subcategory, machine],
})
