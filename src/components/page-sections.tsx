'use client'

import {createDataAttribute} from '@sanity/visual-editing'
import {useOptimistic} from '@sanity/visual-editing/react'
import type {SanityDocument} from '@sanity/client'
import Link from 'next/link'
import type {CmsPage,PageSection} from '@/sanity/lib/pages'
import type {FAQ,ProcessStep,Project,Service,SiteSettings} from '@/lib/content'
import {ProjectCard} from '@/components/project-card'
import {ServiceCard} from '@/components/service-card'
import {FaqList} from '@/components/faq-list'
import {ContactForm} from '@/components/contact-form'
import {CtaBand} from '@/components/cta-band'

type Settings=SiteSettings
type Props={
 page:CmsPage
 settings:Settings
 services:Service[]
 projects:Project[]
 steps:ProcessStep[]
 faqs:FAQ[]
}
const attributeConfig={
 projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'a8mywjme',
 dataset:process.env.NEXT_PUBLIC_SANITY_DATASET||'production',
 baseUrl:process.env.NEXT_PUBLIC_SANITY_STUDIO_URL||(process.env.NEXT_PUBLIC_SITE_URL?process.env.NEXT_PUBLIC_SITE_URL+'/studio':'http://localhost:3000/studio')
}
type PageDocument=SanityDocument<{sections?:PageSection[]}>

export function PageSections({page,settings,services,projects,steps,faqs}:Props){
 const sections=useOptimistic<PageSection[]|undefined,PageDocument>(
  page.sections,
  (current,action)=>{
   if(action.id!==page._id)return current
   return action.document.sections??current
  }
 )
 if(!sections?.length)return null
 const parentAttribute=createDataAttribute({...attributeConfig,id:page._id,type:'page',path:'sections'}).toString()
 return <div className="cms-sections" data-sanity={parentAttribute} data-sanity-drag-flow="vertical">
  {sections.map((section,index)=>{
   const attr=createDataAttribute({
    ...attributeConfig,id:page._id,type:'page',
    path:`sections[_key=="${section._key}"]`
   }).toString()
   return <div className="cms-section-wrapper" data-sanity={attr} key={section._key||`${section._type}-${index}`}>
    <SectionContent section={section} settings={settings} services={services} projects={projects} steps={steps} faqs={faqs}/>
   </div>
  })}
 </div>
}

function SectionContent({section,settings,services,projects,steps,faqs}:{section:PageSection;settings:Settings;services:Service[];projects:Project[];steps:ProcessStep[];faqs:FAQ[]}){
 switch(section._type){
  case 'heroSection':{
   const imageUrl=section.image?.asset?.url||settings.portraitUrl
   return <section className={`home-hero shell cms-hero ${imageUrl?'cms-hero-with-image':'cms-hero-text-only'}`}>
    <div className="hero-copy">
     {section.eyebrow?<span className="eyebrow"><i/>{section.eyebrow}</span>:null}
     <h1>{section.title}</h1>
     {section.body?<p className="hero-description">{section.body}</p>:null}
     <div className="hero-actions">
      {section.primaryLabel?<Link href={section.primaryUrl||'/contact'} className="button button-green">{section.primaryLabel}</Link>:null}
      {section.secondaryLabel?<Link href={section.secondaryUrl||'/work'} className="button button-outline">{section.secondaryLabel}</Link>:null}
     </div>
     <div className="hero-footnote"><span className="availability-dot"/>{settings.availability}<span className="footnote-divider"/>{settings.location}</div>
    </div>
    {imageUrl?<div className="hero-visual"><div className="portrait-frame"><img src={imageUrl} alt="Paul Oloruntobi, Digital Systems Builder" className="portrait-image"/></div><div className="portrait-caption"><span className="caption-mark">P.</span><div><strong>{settings.fullName}</strong><small>{settings.role}</small></div></div><div className="floating-note"><span className="floating-note-icon">✓</span><span>Business-first.<br/><b>Technology that fits.</b></span></div></div>:null}
   </section>
  }
  case 'textSection':
   return <section className="section shell cms-text-section">
    {section.eyebrow?<span className="eyebrow"><i/>{section.eyebrow}</span>:null}
    {section.title?<h2>{section.title}</h2>:null}
    {section.body?<p>{section.body}</p>:null}
   </section>
  case 'imageSection':{
   const url=section.image?.asset?.url
   if(!url)return null
   return <figure className={`section shell cms-image cms-image-${section.layout||'contained'}`}>
    <img src={url} alt={section.image?.alt||section.title||''}/>
    {section.caption?<figcaption>{section.caption}</figcaption>:null}
   </figure>
  }
  case 'servicesSection':
   return <section className="section shell">
    <div className="section-heading-row"><div>{section.eyebrow?<span className="eyebrow"><i/>{section.eyebrow}</span>:null}<h2>{section.title||'Services'}</h2></div>{section.intro?<p>{section.intro}</p>:null}</div>
    <div className="service-grid">{services.slice(0,section.limit||services.length).map((service,index)=><ServiceCard key={service._id||service.title} service={service} index={index}/>)}</div>
    <div className="section-link"><Link href="/services" className="text-link">Explore all services ↗</Link></div>
   </section>
  case 'projectsSection':
   return <section className="dark-section section"><div className="shell">
    <div className="section-heading-row section-heading-light"><div>{section.eyebrow?<span className="eyebrow eyebrow-light"><i/>{section.eyebrow}</span>:null}<h2>{section.title||'Selected work'}</h2></div>{section.intro?<p>{section.intro}</p>:null}</div>
    <div className="project-grid">{projects.slice(0,section.limit||projects.length).map((project,index)=><ProjectCard key={project._id||project.slug} project={project} index={index}/>)}</div>
    <div className="section-link section-link-light"><Link href="/work" className="text-link">View all projects ↗</Link></div>
   </div></section>
  case 'processSection':
   return <section className="section shell process-timeline">
    <div className="section-heading-row"><div>{section.eyebrow?<span className="eyebrow"><i/>{section.eyebrow}</span>:null}<h2>{section.title||'My process'}</h2></div>{section.intro?<p>{section.intro}</p>:null}</div>
    <div className="timeline-list">{steps.map((step,index)=><article className="timeline-item" key={step._id||step.number}><div className="timeline-marker"><span>{step.number}</span>{index!==steps.length-1?<i/>:null}</div><div className="timeline-copy"><span className="eyebrow">STAGE {step.number}</span><h2>{step.title}</h2><p className="timeline-lead">{step.description}</p><p>{step.detail}</p></div></article>)}</div>
   </section>
  case 'faqSection':
   return <section className="section shell faq-layout">
    <div className="faq-aside">{section.eyebrow?<span className="eyebrow"><i/>{section.eyebrow}</span>:null}<h2>{section.title||'Frequently asked questions'}</h2>{section.intro?<p>{section.intro}</p>:null}<Link href="/contact" className="text-link">Ask about your project ↗</Link></div>
    <FaqList faqs={faqs.slice(0,section.limit||faqs.length)}/>
   </section>
  case 'contactSection':
   return <section className="section shell contact-layout">
    <div className="contact-aside"><span className="eyebrow"><i/>{section.eyebrow||'GET IN TOUCH'}</span><h2>{section.title||'Discuss a project'}</h2><p>{section.body||'Share the goal, the challenge and any context you already have.'}</p><div className="contact-detail"><strong>EMAIL</strong><a href={`mailto:${settings.email}`}>{settings.email}</a></div><div className="contact-detail"><strong>WORKING STYLE</strong><span>{settings.location}</span></div></div>
    <ContactForm email={settings.email}/>
   </section>
  case 'ctaSection':
   return <CtaBand title={section.title||'Have a project in mind?'} description={section.body||'Let’s discuss the right next step.'}/>
  default:
   return null
 }
}
