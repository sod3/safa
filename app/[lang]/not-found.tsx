'use client';
import Link from 'next/link';
import {useParams} from 'next/navigation';
import {href,txt,type Locale} from '@/lib/content';
export default function NotFound(){const params=useParams();const l:Locale=params.lang==='ar'?'ar':'en';return <section className="section container simple-copy"><span className="eyebrow">404</span><h1>{txt(l,['This page has moved.','تم نقل هذه الصفحة.'])}</h1><p>{txt(l,['Let’s get you back to fresh water.','لنعد إلى المياه النقية.'])}</p><Link prefetch={false} className="button button-primary" href={href(l)}>{txt(l,['Back to Safa','العودة إلى صفا'])}</Link></section>}
