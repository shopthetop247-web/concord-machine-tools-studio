import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'concord-machine-tools',
  title: 'Concord Machine Tools Studio',

  projectId: 'iwodjd3n',
  dataset: 'production',

  plugins: [
    deskTool({
      defaultDocumentNode: (S) =>
        S.document().views([S.view.form()]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
