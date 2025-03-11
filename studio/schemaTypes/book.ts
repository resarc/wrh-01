import { defineField } from 'sanity'

export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    },
    {
      name: 'pdf',
      title: 'PDF',
      type: 'file',
    },
    {
      name: 'info',
      title: 'Info',
      type: 'portableText',
    }
  ]
}


