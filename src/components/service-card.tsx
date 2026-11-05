import Link from 'next/link'
import type {ComponentType} from 'react'
import {ArrowUpRight,Boxes,Code2,Workflow,ShoppingBag,PanelsTopLeft} from 'lucide-react'
import type {Service} from '@/lib/content'
const icons:Record<string,ComponentType<{size?:number}>>={'shopping-bag':ShoppingBag,'panels-top-left':PanelsTopLeft,workflow:Workflow,boxes:Boxes,code:Code2}
export function ServiceCard({service,index=0}:{service:Service;index?:number}){const Icon=icons[service.icon]||Code2;return <article className="service-card"><div className="service-card-top"><span className="service-number">0{index+1}</span><span className="service-icon"><Icon size={21}/></span></div><span className="eyebrow">{service.eyebrow}</span><h3>{service.title}</h3><p>{service.description}</p><ul className="mini-list">{service.deliverables.slice(0,4).map(item=><li key={item}>{item}</li>)}</ul><Link href="/services" className="text-link">Explore service <ArrowUpRight size={15}/></Link></article>}
