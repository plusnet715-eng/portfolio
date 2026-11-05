'use client'

import type {ReactNode} from 'react'
import {usePathname} from 'next/navigation'

type Props={children:ReactNode;header:ReactNode;footer:ReactNode}

export function SiteShell({children,header,footer}:Props){
 const pathname=usePathname()
 const isStudio=pathname==='/studio'||pathname.startsWith('/studio/')
 return <>
  {!isStudio?header:null}
  <main>{children}</main>
  {!isStudio?footer:null}
 </>
}
