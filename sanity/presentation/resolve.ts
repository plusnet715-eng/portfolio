import {defineLocations, type PresentationPluginOptions} from 'sanity/presentation'
export const resolve:PresentationPluginOptions['resolve']={
 locations:{
  page:defineLocations({select:{title:'title',slug:'slug.current'},resolve:doc=>({locations:[{title:doc?.title||'Page',href:doc?.slug==='home'?'/':`/${doc?.slug||''}`}]})}),
  project:defineLocations({select:{title:'title',slug:'slug.current'},resolve:doc=>({locations:[{title:doc?.title||'Project',href:`/work/${doc?.slug||''}`},{title:'Past work',href:'/work'}]})})
 }
}
