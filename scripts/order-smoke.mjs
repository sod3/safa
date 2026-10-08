import {chromium,expect} from '@playwright/test';
const browser=await chromium.launch({headless:true});const context=await browser.newContext({viewport:{width:390,height:844}});const page=await context.newPage();
try{
 await page.goto('http://127.0.0.1:3005/en/order/?product=manual-pump&quantity=4&area=Test%20area',{waitUntil:'networkidle'});
 await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByRole('heading',{name:'How much do you need?'})).toBeVisible();
 await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByRole('heading',{name:'Where are we headed?'})).toBeVisible();
 await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.getByRole('alert').first()).toBeVisible();
 await page.getByLabel('Delivery address *').fill('Test building, street 12, zone 20');await page.getByRole('button',{name:'Continue',exact:true}).click();
 await expect(page.getByRole('heading',{name:'A little about you.'})).toBeVisible();
 await page.getByLabel('Full name *').fill('Website QA');await page.getByLabel('Qatar mobile number *').fill('50123456');await page.getByLabel('Email address *').fill('qa@example.invalid');await page.getByRole('button',{name:'Continue',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Everything look right?'})).toBeVisible();await page.getByRole('button',{name:'Prepare My Request'}).click();await expect(page.getByRole('heading',{name:'Your request is ready.'})).toBeVisible();console.log('Complete order flow passed. No external action performed.');
}catch(e){console.log('Flow state:',await page.locator('.order-main').innerText());await page.screenshot({path:'../research/order-debug.png',fullPage:true});throw e}finally{await browser.close()}
