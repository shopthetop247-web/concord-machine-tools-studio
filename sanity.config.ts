import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { myStructure } from './schemas/deskStructure'
import category from './schemas/category'
import subcategory from './schemas/subcategory'
import machine from './schemas/machine'

export default defineConfig({
  name: 'concord-machine-tools',
  title: 'Concord Machine Tools Studio',
  projectId: 'iwodjd3n',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: myStructure
    })
  ],
  schema: {
    types: [category, subcategory, machine]
  }
})
