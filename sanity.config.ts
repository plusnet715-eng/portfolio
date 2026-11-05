'use client'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './sanity/schemaTypes'
import {resolve} from './sanity/presentation/resolve'

export default defineConfig({
 name:'pluswrld',
 title:'Pluswrld Content Studio',
 basePath:'/studio',
 projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'a8mywjme',
 dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',
 plugins:[
  structureTool(),
  presentationTool({
   resolve,
   previewUrl:{
    initial:process.env.SANITY_STUDIO_PREVIEW_URL||process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000',
    previewMode:{enable:'/api/draft-mode/enable',disable:'/api/draft-mode/disable'}
   }
  })
 ],
 schema:{types:schemaTypes}
})
