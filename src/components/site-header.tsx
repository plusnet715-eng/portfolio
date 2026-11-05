'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import {ArrowUpRight,Menu,X} from 'lucide-react'
const links=[['Services','/services'],['How I can help','/how-i-can-help'],['My process','/process'],['About','/about'],['Past work','/work'],['FAQ','/faq']]
export function SiteHeader(){const pathname=usePathname();const[open,setOpen]=useState(false);return <header className="site-header"><div className="nav-wrap shell"><Link href="/" className="brand-lockup" aria-label="Pluswrld home" onClick={()=>setOpen(false)}><span className="brand-mark">P+</span><span className="brand-name">Plus<span>wrld</span><small>BUILD · AUTOMATE · GROW</small></span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open}>{open?<X size={21}/>:<Menu size={21}/>}</button><nav className={`main-nav ${open?'is-open':''}`} aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} className={pathname===href||(href==='/work'&&pathname.startsWith('/work/'))?'active':''} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-contact" href="/contact" onClick={()=>setOpen(false)}>Discuss a project <ArrowUpRight size={15}/></Link></nav></div></header>}
