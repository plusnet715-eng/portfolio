import {renderCmsPage} from '@/components/render-cms-page'
import type {Metadata} from 'next'
import {PageIntro} from '@/components/page-intro'
import {ProjectCard} from '@/components/project-card'
import {CtaBand} from '@/components/cta-band'
import {getProjects} from '@/lib/content'
export const metadata:Metadata={title:'Past Work'}
export default async function WorkPage(){const cmsPage=await renderCmsPage('work');if(cmsPage)return cmsPage;const projects=await getProjects();return <><PageIntro eyebrow="PAST WORK / SELECTED PROJECTS" title={<>A closer look at<br/><em>the work behind the build.</em></>} description="A selection of client engagements and independent builds across ecommerce, creator platforms and digital products. Each case study explains the context, the implementation and what was delivered." note="Client work · Independent builds · Practical systems"/><section className="section shell work-page-section"><div className="work-page-top"><span className="eyebrow"><i/> PROJECT INDEX</span><span>{String(projects.length).padStart(2,'0')} PROJECTS</span></div><div className="work-grid">{projects.map((project,i)=><ProjectCard key={project._id||project.slug} project={project} index={i}/>)}</div><p className="portfolio-note">Project descriptions reflect the work recorded for each engagement. Commercial outcomes are only stated where they are supported by project records.</p></section><CtaBand title="Have a project with a similar challenge?" description="Let’s discuss the business need and work out what a good solution would involve."/></>}
