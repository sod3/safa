import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://127.0.0.1:3005/en/',{waitUntil:'networkidle'});
await page.screenshot({path:'../research/desktop-hero.png'});
for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=700){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(120);}
await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(800);
await page.screenshot({path:'../research/desktop-home-full.png',fullPage:true});
await page.setViewportSize({width:390,height:844});
await page.goto('http://127.0.0.1:3005/en/',{waitUntil:'networkidle'});
await page.screenshot({path:'../research/mobile-hero.png'});
await page.goto('http://127.0.0.1:3005/ar/',{waitUntil:'networkidle'});
await page.screenshot({path:'../research/arabic-hero.png'});
await page.goto('http://127.0.0.1:3005/en/order/',{waitUntil:'networkidle'});
await page.screenshot({path:'../research/mobile-order.png'});
console.log(JSON.stringify({errors}));
await browser.close();

