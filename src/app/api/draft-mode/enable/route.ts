import {defineEnableDraftMode} from 'next-sanity/draft-mode'
import {client} from '@/sanity/lib/client'
import {NextResponse} from 'next/server'
export async function GET(request:Request){
 const url=new URL(request.url)
 const secret=url.searchParams.get('secret')
 if(!process.env.SANITY_PREVIEW_SECRET||secret!==process.env.SANITY_PREVIEW_SECRET)return new NextResponse('Invalid preview secret',{status:401})
 if(!client)return new NextResponse('Sanity project is not configured',{status:503})
 const {GET:enable}=defineEnableDraftMode({client:client.withConfig({token:process.env.SANITY_API_READ_TOKEN})})
 return enable(request)
}
