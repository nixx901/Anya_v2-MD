import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 m.reply(`Total fitur saat ini adalah ${fitur.length}`)
}
handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler
