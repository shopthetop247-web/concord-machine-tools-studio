import { defineConfig } from 'sanity'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'concord-machine-tools',
  title: 'Concord Machine Tools',
  projectId: '<YOUR_PROJECT_ID>', // Replace with your actual Sanity project ID
  dataset: 'production',
  basePath: '/studio',
  schema: {
    types: schemaTypes
  }
})
