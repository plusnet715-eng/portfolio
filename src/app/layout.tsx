import type {Metadata} from 'next'
import {Work_Sans} from 'next/font/google'
import './globals.css'
import {SiteHeader} from '@/components/site-header'
import {SiteFooter} from '@/components/site-footer'
const workSans=Work_Sans({subsets:['latin'],variable:'--font-work-sans',display:'swap'})
const adobeKit=process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT
export const metadata:Metadata={title:{default:'Pluswrld | Digital Systems Consultant',template:'%s | Pluswrld'},description:'Pluswrld helps businesses build, improve and connect ecommerce, websites, applications and business automation systems.',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://pluswrld.vercel.app'),icons:{icon:'/pluswrld-mark.png',shortcut:'/pluswrld-mark.png',apple:'/pluswrld-mark.png'},openGraph:{title:'Pluswrld | Digital Systems Consultant',description:'Build. Automate. Grow.',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head>{adobeKit?<link rel="stylesheet" href={`https://use.typekit.net/${adobeKit}.css`}/>:null}</head><body className={workSans.variable}><SiteHeader/><main>{children}</main><SiteFooter/></body></html>}
