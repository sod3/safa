import {readdir,copyFile} from 'node:fs/promises';
import path from 'node:path';
// Next 16.3 exports segment payloads as directories while its client requests
// dot-separated segment filenames. Preserve originals and add exact aliases
// so client navigation works on ordinary static hosts without URL rewriting.
async function walk(dir){const files=[];for(const e of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())files.push(...await walk(p));else files.push(p)}return files}
let count=0;
for(const file of await walk('out')){const parts=file.split(path.sep);const index=parts.findIndex(p=>p.startsWith('__next.')&&p!=='__next._full.txt'&&p!=='__next._tree.txt');if(index<0||index===parts.length-1||!file.endsWith('.txt'))continue;const dest=path.join(...parts.slice(0,index),parts.slice(index).join('.'));await copyFile(file,dest);count++;}
console.log(`Prepared ${count} static segment aliases.`);
