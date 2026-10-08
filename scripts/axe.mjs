import {chromium} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
const page=await context.newPage();
const report=[];
for(const route of ['/en/','/ar/','/en/order/','/ar/order/','/en/business/','/en/contact/','/en/products/','/en/quality/']){await page.goto('http://127.0.0.1:3005'+route,{waitUntil:'networkidle'});const scan=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();report.push({route,violations:scan.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,html:n.html,summary:n.failureSummary}))}))});console.log(route,scan.violations.map(v=>v.id+': '+v.nodes.length).join(', '));}
await fs.writeFile('../research/axe.json',JSON.stringify(report,null,2));await browser.close();
