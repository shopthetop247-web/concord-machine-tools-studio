// schemas/deskStructure.ts

import S from '@sanity/desk-tool/structure-builder'

export const getDefaultDocumentNode = () => null

export const myStructure = () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Category')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Category')),

      S.listItem()
        .title('Subcategory')
        .schemaType('subcategory')
        .child(S.documentTypeList('subcategory').title('Subcategory')),

      S.listItem()
        .title('Machine')
        .schemaType('machine')
        .child(S.documentTypeList('machine').title('Machine')),
    ])
