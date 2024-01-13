import fetch from 'node-fetch'
import { tebakgambar } from '@bochilteam/scraper'

let timeout = 60000
let poin = 900
let tiketcoin = 1
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
  let id = m.chat
  if (id in conn.tebakgame) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgame[id][0])
    throw false
  }
  
    let json = await tebakgambar()
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tega untuk clue
Bonus: ${poin} XP
    `.trim()
  conn.tebakgame[id] = [
    await conn.sendMessage(m.chat, {image: { url: json.img}, caption: caption}, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakgame[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
      delete conn.tebakgame[id]
    }, timeout)
  ]
}
handler.help = ['tebakgame']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.limit = true
handler.group = true

export default handler