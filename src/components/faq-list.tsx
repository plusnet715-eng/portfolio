'use client'
import {useState} from 'react'
import {ChevronDown} from 'lucide-react'
import type {FAQ} from '@/lib/content'
export function FaqList({faqs}:{faqs:FAQ[]}){const[active,setActive]=useState<number|null>(0);return <div className="faq-list">{faqs.map((faq,i)=><article className={`faq-item ${active===i?'is-open':''}`} key={faq._id||faq.question}><button className="faq-question" onClick={()=>setActive(active===i?null:i)} aria-expanded={active===i}><span><small>{faq.category}</small>{faq.question}</span><i><ChevronDown size={18}/></i></button>{active===i?<div className="faq-answer"><p>{faq.answer}</p></div>:null}</article>)}</div>}
