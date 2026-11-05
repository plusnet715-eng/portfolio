import {client} from './client'
export type PageBlock={_key:string;_type:string;[key:string]:any}
export async function getPage(slug:string){
 if(!client)return null
 try{return await client.fetch(`*[_type=="page" && slug.current==$slug][0]{_id,_type,title,"slug":slug.current,sections[]{...,image{...,asset->{_id,url,metadata{lqip,dimensions}}}}}`,{slug},{perspective:'drafts',stega:true,next:{revalidate:0}})}catch(e){console.error('Page builder query failed',e);return null}
}
