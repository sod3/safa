import {chromium,expect} from '@playwright/test';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const page=await context.newPage();
 await page.goto('http://127.0.0.1:3005/ar/order/',{waitUntil:'networkidle'});
 const next=()=>page.getByRole('button',{name:'متابعة',exact:true}).click();
 await next();await next();
 await page.getByLabel('المنطقة / الحي *').fill('منطقة الاختبار');
 await page.getByLabel('عنوان التوصيل *').fill('مبنى الاختبار، شارع ١٢');
 await next();
 await page.getByLabel('الاسم الكامل *').fill('اختبار الموقع');
 await page.getByLabel('رقم الجوال القطري *').fill('50123456');
 await page.getByLabel('البريد الإلكتروني *').fill('qa@example.invalid');
 await next();await page.getByRole('button',{name:'جهز طلبي',exact:true}).click();
 await expect(page.getByRole('heading',{name:'طلبك جاهز.'})).toBeVisible();
 const draft=decodeURIComponent(await page.getByRole('link',{name:'افتح البريد للإرسال'}).getAttribute('href'));
 assert.ok(draft.includes('طلب مياه صفا'));
 assert.ok(draft.includes('المنتج:'));
 assert.ok(draft.includes('البريد الإلكتروني: qa@example.invalid'));
 assert.equal(await page.locator('html').getAttribute('dir'),'rtl');
 console.log('Complete Arabic order and translated email draft passed. No request sent.');
} finally {await browser.close();}
