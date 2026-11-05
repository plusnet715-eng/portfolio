import type {Metadata} from 'next'
import {Work_Sans} from 'next/font/google'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity/visual-editing'
import './globals.css'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
import {SiteShell} from '@/components/site-shell'

const workSans=Work_Sans({subsets:['latin'],variable:'--font-work-sans',display:'swap'})
const adobeKit=process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT||'zpa7ccg'

export const metadata:Metadata={
 title:{default:'Pluswrld | Digital Systems Consultant',template:'%s | Pluswrld'},
 description:'Pluswrld helps businesses build, improve and connect ecommerce, websites, applications and business automation systems.',
 metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://pluswrld.vercel.app'),
 icons:{
  icon:'https://cdn.sanity.io/images/a8mywjme/production/a45e67c49c83edbb0b739c3348ae43406d8a67e4-576x513.png',
  shortcut:'https://cdn.sanity.io/images/a8mywjme/production/a45e67c49c83edbb0b739c3348ae43406d8a67e4-576x513.png',
  apple:'https://cdn.sanity.io/images/a8mywjme/production/a45e67c49c83edbb0b739c3348ae43406d8a67e4-576x513.png'
 },
 openGraph:{title:'Pluswrld | Digital Systems Consultant',description:'Build. Automate. Grow.',type:'website'}
}

export default async function RootLayout({children}:{children:React.ReactNode}){
 const preview=(await draftMode()).isEnabled
 return <html lang="en">
  <head>{adobeKit?<link rel="stylesheet" href={`https://use.typekit.net/${adobeKit}.css`}/>:null}</head>
  <body className={workSans.variable}>
   <SiteShell header={<SiteHeader/>} footer={<SiteFooter/>}>{children}</SiteShell>
   {preview?<VisualEditing/>:null}
  </body>
 </html>
}
