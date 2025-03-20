export default {
  name: 'hr',
  title: 'Horizontal Line',
  type: 'object',
  fields: [
    {
      name: 'style',
      type: 'string',
      options: {
        list: [
          { title: 'Line break', value: 'lineBreak' },
        ]
      }
    }
  ]
}
