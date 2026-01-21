const newsletterSubscription = {
  name: 'newsletterSubscription',
  title: 'Newsletter Subscription',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
  ],
};

const contactFormSubmission = {
  name: 'contactFormSubmission',
  title: 'Contact Form Submission',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Footer', value: 'footer' },
        ],
      },
    },
  ],
};

const dealerApplication = {
  name: 'dealerApplication',
  title: 'Dealer Application',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'postal',
      title: 'Postal Code',
      type: 'string',
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
  ],
};

const contactFormByCity = {
  name: 'contactFormByCity',
  title: 'Global Network',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          { title: 'Baku', value: 'baku' },
          { title: 'Washington', value: 'washington' },
          { title: 'Toronto', value: 'toronto' },
          { title: 'Ankara', value: 'ankara' },
        ],
      },
    },
  ],
};

const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  preview: {
    select: {
      title: 'content.en.title',
      subtitle: 'content.en.location',
      media: 'mainImage',
    },
  },
  fieldsets: [
    { name: 'content', title: 'Content', options: { collapsible: true, collapsed: true } },
    { name: 'media', title: 'Media', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.en.title',
        maxLength: 200,
      },
      description: 'Автоматически генерируется из названия. Нажми "Generate" кнопку',
      validation: (Rule: any) => Rule.required().error('Slug is required'),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      hidden: true,
    },
    {
      name: 'content',
      title: 'Content',
      type: 'object',
      fieldset: 'content',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: false,
          },
          fields: [
            {
              name: 'title',
              title: 'Project Title',
              type: 'string',
              description: 'Layihənin adı (səhifə önizləməsində istifadə olunacaq)',
              placeholder: 'e.g., The Glass Pavilion',
              validation: (Rule: any) => Rule.required().error('Title is required'),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'Layihənin yeri və ya ünvanı',
              placeholder: 'e.g., Geneva, Switzerland',
              validation: (Rule: any) => Rule.required().error('Location is required'),
            },
            {
              name: 'type',
              title: 'Project Type',
              type: 'string',
              description: 'Layihənin tipi və ya kateqoriyası',
              placeholder: 'e.g., Modern Lakeside Office',
              validation: (Rule: any) => Rule.required().error('Project type is required'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Layihənin ətraflı təsviri',
              placeholder: 'Describe the project features and highlights...',
              validation: (Rule: any) => Rule.required().error('Description is required'),
            },
          ],
        },
        {
          name: 'ru',
          title: 'Russian',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Adı layihəsi (rus dilində)',
              placeholder: 'е.g., Стеклянный павильон',
              validation: (Rule: any) => Rule.required().error('Title is required'),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'Layihənin yeri və ünvanı (rus dilində)',
              placeholder: 'е.g., Женева, Швейцария',
              validation: (Rule: any) => Rule.required().error('Location is required'),
            },
            {
              name: 'type',
              title: 'Project Type',
              type: 'string',
              description: 'Layihənin tipi (rus dilində)',
              placeholder: 'е.g., Современный офис',
              validation: (Rule: any) => Rule.required().error('Project type is required'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Layihənin təsviri (rus dilində)',
              placeholder: 'Опишите особенности проекта...',
              validation: (Rule: any) => Rule.required().error('Description is required'),
            },
          ],
        },
        {
          name: 'az',
          title: 'Azerbaijani',
          type: 'object',
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            {
              name: 'title',
              title: 'Project Title',
              type: 'string',
              description: 'Layihənin adı (azərbaycanca)',
              placeholder: 'e.g., Şüşə Pavilyon',
              validation: (Rule: any) => Rule.required().error('Title is required'),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'Layihənin yeri və ünvanı (azərbaycanca)',
              placeholder: 'e.g., Cenevrə, İsveçrə',
              validation: (Rule: any) => Rule.required().error('Location is required'),
            },
            {
              name: 'type',
              title: 'Project Type',
              type: 'string',
              description: 'Layihənin tipi (azərbaycanca)',
              placeholder: 'e.g., Gölkənarında Müasır Ofis',
              validation: (Rule: any) => Rule.required().error('Project type is required'),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Layihənin ətraflı təsviri (azərbaycanca)',
              placeholder: 'Layihənin xüsusiyyətlərini və üstünlüklərini təsvir edin...',
              validation: (Rule: any) => Rule.required().error('Description is required'),
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      fieldset: 'media',
      description: 'Əsas layihə şəkli (layihələr səhifəsində göstərilir)',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error('Main image is required'),
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      fieldset: 'media',
      description: 'Əlavə layihə şəkilləri (isteğe bağlı)',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'videoUrl',
      title: 'YouTube Video URL',
      type: 'url',
      fieldset: 'media',
      description: 'YouTube video linki (məsələn: https://www.youtube.com/embed/VIDEO_ID)',
      placeholder: 'https://www.youtube.com/embed/...',
    },
  ],
};

export const schemaTypes = [contactFormSubmission, newsletterSubscription, contactFormByCity, dealerApplication, project]
