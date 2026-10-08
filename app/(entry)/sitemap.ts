import type {MetadataRoute} from 'next';
import {href,origin,routes,type Locale} from '@/lib/content';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return (['en','ar'] as Locale[]).flatMap(l=>routes.map(path=>({url:origin+href(l,path),changeFrequency:'monthly' as const,priority:path===''?1:path==='products'||path==='order'?.9:.7,alternates:{languages:{en:origin+href('en',path),ar:origin+href('ar',path)}}})))}
