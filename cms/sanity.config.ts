import {defineConfig} from 'sanity'

import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'horowitz-demo',

  projectId: 'qq832t9b',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Контент')
          .items([
            S.listItem()
              .title('Головна')
              .child(S.document().schemaType('home').documentId('home').title('Головна')),
          ]),
    }),
    visionTool(),

    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'ua', title: 'Ukraine'},
      ],
      defaultLanguages: ['ua'],
      buttonAddAll: false,
      fieldTypes: ['string', 'text'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
