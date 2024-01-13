import fs from 'fs';

let handler = async (m, { conn, usedPrefix, command }) => {
    let anu = fs.readFileSync('./json/fakta.json', 'utf8');
    let data = JSON.parse(anu);
    let res = data[Math.floor(Math.random() * data.length)];
    let cap = `*[ Fakta Unik ]*\n➥ ${res}`;
    m.reply(cap);
  } 
handler.command = /^(fakta)$/i;

export default handler;
