import sharp from 'sharp';
// Size variants preserve the master artwork and its transparency.
for (const name of ['pot','pump','cradle','tabletop','standing','cup-holder']) {
 const image=`${name}.webp`;
 await sharp(`public/images/${image}`).resize({width:320}).webp({quality:82}).toFile(`public/images/${image.replace('.webp','-320.webp')}`);
}
await sharp('public/images/bottle-640.webp').resize({width:480}).webp({quality:83}).toFile('public/images/bottle-480.webp');
