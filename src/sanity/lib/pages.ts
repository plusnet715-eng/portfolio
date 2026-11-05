import {draftMode} from 'next/headers'
import {client} from './client'

export type PageSection={
 _key:string
 _type:string
 [key:string]:any
}
export type CmsPage={
 _id:string
 _type:'page'
 title:string
 slug:string
 sections:PageSection[]
 seoTitle?:string
 seoDescription?:string
}

export async function getPage(slug:string):Promise<CmsPage|null>{
 const preview=(await draftMode()).isEnabled
 const configured=client.withConfig({
  perspective:preview?'drafts':'published',
  useCdn:!preview,
  token:preview?process.env.SANITY_API_READ_TOKEN:undefined,
  stega:preview?{
   enabled:true,
   studioUrl:process.env.NEXT_PUBLIC_SANITY_STUDIO_URL||'http://localhost:3000/studio'
  }:false
 })
 const query=`*[_type=="page" && slug.current==$slug][0]{
  _id,_type,title,"slug":slug.current,seoTitle,seoDescription,
  sections[]{
   ...,
   image{...,asset->{_id,url,metadata{lqip,dimensions}}},
  }
 }`
 try{
  return await configured.fetch<CmsPage|null>(query,{slug},{next:{revalidate:preview?0:60}})
 }catch(error){
  console.error('Sanity page query failed',error)
  return null
 }
}
