import fs from 'fs';

let handler = async (m, { conn, usedPrefix, command }) => {
    let anu = fs.readFileSync('./json/taugasih.json', 'utf8');
    let data = JSON.parse(anu);
    let res = data[Math.floor(Math.random() * data.length)];
    let cap = `*[ Fakta Unik ]*\n➥ ${res}`;
    m.reply(cap);
  } 
handler.help = ['taugasih']
handler.tags = ['fun']
handler.command = /^(taugasih)$/i

export default handler 