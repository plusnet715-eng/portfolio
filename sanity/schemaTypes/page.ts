import {defineField,defineType,defineArrayMember} from 'sanity'
export default defineType({
  name:'page',title:'Website pages',type:'document',
  fields:[
    defineField({name:'title',title:'Page title',type:'string',validation:r=>r.required()}),
    defineField({name:'slug',title:'URL slug',type:'slug',options:{source:'title',maxLength:80},validation:r=>r.required()}),
    defineField({name:'seoTitle',title:'SEO title',type:'string'}),
    defineField({name:'seoDescription',title:'SEO description',type:'text',rows:2}),
    defineField({name:'sections',title:'Page sections — drag to reorder',type:'array',of:[
      defineArrayMember({type:'heroSection'}),
      defineArrayMember({type:'textSection'}),
      defineArrayMember({type:'imageSection'}),
      defineArrayMember({type:'servicesSection'}),
      defineArrayMember({type:'projectsSection'}),
      defineArrayMember({type:'processSection'}),
      defineArrayMember({type:'faqSection'}),
      defineArrayMember({type:'ctaSection'})
    ],options:{insertMenu:{views:[{name:'list'}]}}})
  ],
  preview:{select:{title:'title',subtitle:'slug.current'}}
})
