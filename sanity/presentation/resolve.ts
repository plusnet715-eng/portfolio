import {defineDocuments,defineLocations,type PresentationPluginOptions} from 'sanity/presentation'

const pageRoutes=[
 {slug:'home',href:'/'},
 {slug:'services',href:'/services'},
 {slug:'how-i-can-help',href:'/how-i-can-help'},
 {slug:'process',href:'/process'},
 {slug:'about',href:'/about'},
 {slug:'work',href:'/work'},
 {slug:'faq',href:'/faq'},
 {slug:'contact',href:'/contact'}
]

export const resolve:PresentationPluginOptions['resolve']={
 mainDocuments:defineDocuments([
  {route:'/',filter:'_type == "page" && slug.current == "home"'},
  {route:'/services',filter:'_type == "page" && slug.current == "services"'},
  {route:'/how-i-can-help',filter:'_type == "page" && slug.current == "how-i-can-help"'},
  {route:'/process',filter:'_type == "page" && slug.current == "process"'},
  {route:'/about',filter:'_type == "page" && slug.current == "about"'},
  {route:'/work',filter:'_type == "page" && slug.current == "work"'},
  {route:'/faq',filter:'_type == "page" && slug.current == "faq"'},
  {route:'/contact',filter:'_type == "page" && slug.current == "contact"'},
  {route:'/work/:slug',filter:'_type == "project" && slug.current == $slug'}
 ]),
 locations:{
  page:defineLocations({
   select:{title:'title',slug:'slug.current'},
   resolve:doc=>{
    const route=pageRoutes.find(item=>item.slug===doc?.slug)
    return {locations:[{title:doc?.title||'Page',href:route?.href||'/'}]}
   }
  }),
  project:defineLocations({
   select:{title:'title',slug:'slug.current'},
   resolve:doc=>({locations:[{title:doc?.title||'Project',href:`/work/${doc?.slug||''}`},{title:'Past work',href:'/work'}]})
  })
 }
}
