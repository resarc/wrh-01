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
      name: 'title_th',
      title: 'Title TH',
      type: 'string',
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
      name: 'bookmark',
      title: 'Bookmark',
      type: 'array',
      of: [
        {
          name: 'bookmarkItem',
          title: 'Bookmark item',
          type: 'bookmark',
        }
      ]
    },
    {
      name: 'info',
      title: 'Info',
      type: 'portableText',
    }
  ]
}


