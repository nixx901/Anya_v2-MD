let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['cekgay', 'cekpintar', 'cekcantik', 'cekganteng', 'cekgabut', 'cekgila', 'ceklesbi', 'cekstress', 'cekbucin', 'cekjones', 'ceksadboy']
handler.tags = ['fun']
handler.command = /^cek(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy)/i

export default handler