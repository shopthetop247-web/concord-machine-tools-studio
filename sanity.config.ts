import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
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
      // No external structure-builder needed in v3
      defaultDocumentNode: (S, { schemaType }) => {
        // You can customize per type if needed
        return S.document().views([S.view.form()])
      }
    })
  ],
  schema: {
    types: [category, subcategory, machine],
  },
})
