import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Shell } from '@/components/site';
import { origin, type Locale } from '@/lib/content';
import '../globals.css';
import {JsonLd,organisation} from '@/lib/seo';
export const metadata: Metadata = {metadataBase:new URL(origin),title:{default:'Safa Water | Pure Water Delivered Across Qatar',template:'%s | Safa Water Qatar'},description:'Pure drinking water for homes and businesses in Qatar. Explore Safa’s 5-gallon water, dispensers, quality standards and delivery.',icons:{icon:'/favicon.png'},openGraph:{siteName:'Safa Water',type:'website'},twitter:{card:'summary'}};
export function generateStaticParams(){return [{lang:'en'},{lang:'ar'}]}
export default async function Layout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}){const {lang}=await params;if(lang!=='en'&&lang!=='ar')notFound();return <html lang={lang} dir={lang==='ar'?'rtl':'ltr'}><body><JsonLd value={organisation}/><Shell locale={lang as Locale}>{children}</Shell></body></html>}


