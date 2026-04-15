import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Brand Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Example: Haas, Mazak, Hurco, Makino, DN Solutions, Okuma',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Brand Description (SEO Content)',
      type: 'text',
      rows: 18,
      description: `
Paste 500–1000 words of SEO-optimized HTML here.

Recommended structure:
- H2: Used [Brand] CNC Machines for Sale
- H3: Popular Models
- H3: Why Buy Used [Brand]
- H3: What to Look For

Supported brands:
Haas, Mazak, Hurco, Makino, DN Solutions (Doosan), Okuma

Example topics:
- VF Series, ST Lathes, UMC 5-axis (Haas)
- Integrex, VCN, Quick Turn (Mazak)
- VMX (Hurco)
- PS / V Series (Makino)
- Puma / DNM (Doosan / DN Solutions)
- LB / MB Series (Okuma)
      `.trim(),
    }),

    defineField({
      name: 'website',
      title: 'Official Website',
      type: 'url',
    }),
  ],
});
