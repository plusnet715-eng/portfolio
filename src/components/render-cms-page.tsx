import type {ReactElement} from 'react'
import {getPage} from '@/sanity/lib/pages'
import {getSettings,getServices,getProjects,getProcessSteps,getFaqs} from '@/lib/content'
import {PageSections} from '@/components/page-sections'

export async function renderCmsPage(slug:string):Promise<ReactElement|null>{
 const page=await getPage(slug)
 if(!page?.sections?.length)return null
 const [settings,services,projects,steps,faqs]=await Promise.all([
  getSettings(),getServices(),getProjects(),getProcessSteps(),getFaqs()
 ])
 return <PageSections page={page} settings={settings} services={services} projects={projects} steps={steps} faqs={faqs}/>
}
