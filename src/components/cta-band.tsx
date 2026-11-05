import Link from 'next/link'
import {ArrowUpRight} from 'lucide-react'
export function CtaBand({title='Have a project in mind?',description='Let’s understand what you need and map out a practical way to get it done.'}:{title?:string;description?:string}){return <section className="cta-band shell"><div><span className="eyebrow eyebrow-light">NEXT STEP</span><h2>{title}</h2><p>{description}</p></div><Link href="/contact" className="button button-white">Discuss a project <ArrowUpRight size={17}/></Link></section>}
