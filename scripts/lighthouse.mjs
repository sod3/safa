import lighthouse from 'lighthouse';
import {chromium} from '@playwright/test';
import desktopConfig from 'lighthouse/core/config/lr-desktop-config.js';
import fs from 'node:fs/promises';
const chrome=await chromium.launch({headless:true,args:['--remote-debugging-port=9222']});
const summary=[];
try{for(const [locale,device] of [['en','mobile'],['ar','mobile'],['en','desktop']]){
const result=await lighthouse(`http://127.0.0.1:3005/${locale}/`,{port:9222,output:'json',onlyCategories:['performance','accessibility','best-practices','seo'],logLevel:'error'},device==='desktop'?desktopConfig:undefined);
await fs.writeFile(`../research/lighthouse-${locale}-${device}.json`,JSON.stringify(result.lhr,null,2));
const scores=Object.fromEntries(Object.entries(result.lhr.categories).map(([k,v])=>[k,Math.round(v.score*100)]));
const failures=Object.values(result.lhr.audits).filter(a=>a.score!==null&&a.score<1&&a.details?.type!=='debugdata').map(a=>({id:a.id,title:a.title,score:a.score,displayValue:a.displayValue,details:a.details}));
summary.push({locale,device,scores,failures});console.log(JSON.stringify({locale,device,scores,failures:failures.map(x=>({id:x.id,title:x.title,score:x.score,displayValue:x.displayValue}))}));}
await fs.writeFile('../research/lighthouse-summary.json',JSON.stringify(summary,null,2));
}finally{await chrome.close()}
