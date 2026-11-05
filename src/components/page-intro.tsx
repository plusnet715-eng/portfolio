import type {ReactNode} from 'react'
type Props={eyebrow:string;title:ReactNode;description:string;note?:string}
export function PageIntro({eyebrow,title,description,note}:Props){return <section className="page-intro shell"><span className="eyebrow"><i/> {eyebrow}</span><h1>{title}</h1><div className="page-intro-bottom"><p>{description}</p>{note?<span className="intro-note">{note}</span>:null}</div></section>}
