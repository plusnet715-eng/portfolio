import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'
export default defineConfig({name:'pluswrld',title:'Pluswrld Content Studio',projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'00000000',dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',plugins:[structureTool()],schema:{types:schemaTypes}})
