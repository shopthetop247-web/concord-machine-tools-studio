import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'concord-machine-tools',
  title: 'Concord Machine Tools',
  projectId: 'iwodjd3n', // Replace with your actual Sanity project ID
  dataset: 'production',
  basePath: '/studio',
  schema: {
    types: schemaTypes
  }
})
