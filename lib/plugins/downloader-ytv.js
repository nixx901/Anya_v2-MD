import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
   m.reply(`ytmp4 sedang error silakan download video youtube memakai situs https://www.y2mate.com/id788`)
  }
handler.help = ['ytmp4']
handler.tags = ['tools']
handler.command = /^ytv|ytmp4?$/i
handler.limit = true
export default handler
