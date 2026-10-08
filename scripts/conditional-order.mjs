import {chromium,expect} from '@playwright/test';
const browser=await chromium.launch({headless:true});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 const page=await context.newPage();
 await page.goto('http://127.0.0.1:3005/en/order/',{waitUntil:'networkidle'});
 const next=()=>page.getByRole('button',{name:'Continue',exact:true}).click();
 await next();await next();
 await page.getByLabel('Area / neighbourhood *').fill('Test area');
 await page.getByLabel('Delivery address *').fill('QA building, street 12');
 await page.getByRole('combobox',{name:'Delivery preference'}).selectOption('date');
 await next();await expect(page.getByRole('alert').first()).toBeVisible();
 await page.getByLabel('Preferred date *').fill('2020-01-01');
 await next();await expect(page.getByRole('alert').first()).toBeVisible();
 await page.getByLabel('Preferred date *').fill('2099-01-01');
 await next();await expect(page.getByRole('heading',{name:'A little about you.'})).toBeVisible();
 await page.getByLabel('Existing customer', {exact:true}).check();
 await page.getByLabel('Full name *').fill('Website QA');
 await page.getByLabel('Qatar mobile number *').fill('50123456');
 await page.getByLabel('Email address *').fill('qa@example.invalid');
 await next();await expect(page.getByLabel('Customer code *')).toHaveAttribute('aria-invalid','true');
 await page.getByLabel('Customer code *').fill('QA-TEST');
 await next();await expect(page.locator('.review')).toContainText('QA-TEST');
 await page.getByRole('button',{name:'Back',exact:true}).click();
 await expect(page.getByLabel('Full name *')).toHaveValue('Website QA');
 await next();await page.getByRole('button',{name:'Prepare My Request'}).click();
 await expect(page.getByRole('heading',{name:'Your request is ready.'})).toBeVisible();
 console.log('Preferred-date, existing-customer, correction and back-navigation checks passed. No request sent.');
} finally {await browser.close();}

