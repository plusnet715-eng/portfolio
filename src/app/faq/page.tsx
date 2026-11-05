import type {Metadata} from 'next'
import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'
import {PageIntro} from '@/components/page-intro'
import {FaqList} from '@/components/faq-list'
import {CtaBand} from '@/components/cta-band'
import {getFaqs} from '@/lib/content'
export const metadata:Metadata={title:'Frequently Asked Questions'}
export default async function FAQPage(){const faqs=await getFaqs();return <><PageIntro eyebrow="FAQ / BEFORE WE START" title={<>A few useful answers<br/><em>before we talk.</em></>} description="A project is easier to start when the practical questions are answered. Here are some of the things clients commonly ask about scope, platforms, timelines and working together." note="Still have a question? Send it through."/><section className="section shell faq-layout"><div className="faq-aside"><span className="eyebrow"><i/> QUICK CLARITY</span><h2>Good questions<br/><em>make better projects.</em></h2><p>If your question is specific to your business or setup, send it over. I would rather clarify it early than make assumptions.</p><Link href="/contact" className="text-link">Ask about your project <ArrowUpRight size={16}/></Link></div><FaqList faqs={faqs}/></section><CtaBand title="Your project may need a specific answer." description="Tell me what you are planning and I will help clarify the next step."/></>}
