import {perspectiveCookieName} from '@sanity/preview-url-secret/constants'

export async function GET(){
 const cookie=[`${perspectiveCookieName}=`,'Path=/','HttpOnly','Secure','SameSite=None','Max-Age=0']
 const headers=new Headers()
 headers.append('Set-Cookie',cookie.join('; '))
 headers.append('Set-Cookie',[...cookie,'Partitioned'].join('; '))
 headers.set('Location','/')
 return new Response(null,{status:307,headers})
}
