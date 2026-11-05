import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config'
export const dynamic='force-static'
export {metadata,viewport} from 'next-sanity/studio'
export default function StudioPage(){if(!(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||'a8mywjme')){return <main className="studio-gate"><div><span className="eyebrow"><i/> PLUSWRLD CONTENT STUDIO</span><h1>Your visual editor is ready to connect.</h1><p>To activate the CMS, create a Sanity project and add its Project ID and dataset to the Vercel environment variables. Then redeploy this site. The editable content models are already included in the codebase.</p><a href="https://www.sanity.io/manage" target="_blank" rel="noreferrer">Open Sanity project manager ↗</a></div></main>}return <NextStudio config={config}/>}
