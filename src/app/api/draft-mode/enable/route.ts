import {validatePreviewUrl} from '@sanity/preview-url-secret'
import {withoutSecretSearchParams} from '@sanity/preview-url-secret/without-secret-search-params'
import {perspectiveCookieName} from '@sanity/preview-url-secret/constants'
import {client} from '@/sanity/lib/client'

export async function GET(request:Request){
 const token=process.env.SANITY_API_READ_TOKEN
 if(!token)return new Response('Preview is not configured: add SANITY_API_READ_TOKEN.',{status:503})
 const previewClient=client.withConfig({token,useCdn:false,perspective:'raw'})
 const {isValid,redirectTo,studioPreviewPerspective}=await validatePreviewUrl(previewClient,request.url)
 if(!isValid)return new Response('Invalid or expired preview secret.',{status:401})
 const cleanRedirect=redirectTo?withoutSecretSearchParams(new URL(redirectTo,request.url)).pathname:'/'
 const partitioned=request.headers.get('sec-fetch-dest')==='iframe'&&request.headers.get('sec-fetch-site')==='cross-site'
 const perspective=studioPreviewPerspective||'drafts'
 const cookie=[
  `${perspectiveCookieName}=${encodeURIComponent(perspective)}`,
  'Path=/','HttpOnly','Secure','SameSite=None','Max-Age=3600'
 ]
 if(partitioned)cookie.push('Partitioned')
 const headers=new Headers()
 headers.append('Set-Cookie',cookie.join('; '))
 headers.set('Location',cleanRedirect)
 return new Response(null,{status:307,headers})
}
