import {defineField,defineType} from 'sanity'

export const heroSection=defineType({
 name:'heroSection',title:'Hero',type:'object',
 fields:[
  defineField({name:'eyebrow',title:'Eyebrow',type:'string'}),
  defineField({name:'title',title:'Headline',type:'string',validation:r=>r.required()}),
  defineField({name:'body',title:'Introduction',type:'text',rows:3}),
  defineField({name:'primaryLabel',title:'Primary button label',type:'string'}),
  defineField({name:'primaryUrl',title:'Primary button link',type:'string'}),
  defineField({name:'secondaryLabel',title:'Secondary button label',type:'string'}),
  defineField({name:'secondaryUrl',title:'Secondary button link',type:'string'}),
  defineField({name:'image',title:'Image',type:'image',options:{hotspot:true}})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Hero section',subtitle:'Hero'})}
})
export const textSection=defineType({
 name:'textSection',title:'Text / statement',type:'object',
 fields:[
  defineField({name:'eyebrow',title:'Eyebrow',type:'string'}),
  defineField({name:'title',title:'Heading',type:'string'}),
  defineField({name:'body',title:'Body copy',type:'text',rows:6})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Text section',subtitle:'Text / statement'})}
})
export const imageSection=defineType({
 name:'imageSection',title:'Image / visual',type:'object',
 fields:[
  defineField({name:'title',type:'string'}),
  defineField({name:'image',type:'image',options:{hotspot:true},fields:[defineField({name:'alt',type:'string',title:'Alternative text'})]}),
  defineField({name:'caption',type:'string'}),
  defineField({name:'layout',type:'string',options:{list:['wide','split','contained']}})
 ],
 preview:{select:{title:'title',media:'image'},prepare:({title,media})=>({title:title||'Image section',subtitle:'Image',media})}
})
export const servicesSection=defineType({
 name:'servicesSection',title:'Services list',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'intro',type:'text',rows:3}),
  defineField({name:'limit',type:'number',initialValue:3})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Services',subtitle:'Services list'})}
})
export const projectsSection=defineType({
 name:'projectsSection',title:'Selected work',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'intro',type:'text',rows:3}),
  defineField({name:'limit',type:'number',initialValue:6})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Selected work',subtitle:'Projects'})}
})
export const processSection=defineType({
 name:'processSection',title:'Process steps',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'intro',type:'text',rows:3})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'My process',subtitle:'Process'})}
})
export const faqSection=defineType({
 name:'faqSection',title:'FAQ',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'intro',type:'text',rows:3}),
  defineField({name:'limit',type:'number',initialValue:8})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Frequently asked questions',subtitle:'FAQ'})}
})
export const ctaSection=defineType({
 name:'ctaSection',title:'Call to action',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'body',type:'text',rows:3}),
  defineField({name:'buttonLabel',type:'string'}),
  defineField({name:'buttonUrl',type:'string'})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Call to action',subtitle:'CTA'})}
})
export const contactSection=defineType({
 name:'contactSection',title:'Project enquiry form',type:'object',
 fields:[
  defineField({name:'eyebrow',type:'string'}),
  defineField({name:'title',type:'string'}),
  defineField({name:'body',type:'text',rows:3})
 ],
 preview:{select:{title:'title'},prepare:({title})=>({title:title||'Project enquiry',subtitle:'Contact form'})}
})
export const blockTypes=[heroSection,textSection,imageSection,servicesSection,projectsSection,processSection,faqSection,ctaSection,contactSection]
