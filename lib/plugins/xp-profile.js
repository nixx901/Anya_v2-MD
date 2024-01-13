let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let user = global.db.data.users[m.sender]
    let premium = user.premiumTime
        let prems = `${premium > 0 ? '✅': '❎'}`
    let capt = `
*PROFILE*
😃 Nama: ${user.name}
📞 Number: ${m.sender.replace('@s.whatsapp.net', '')}
🌟 Exp: ${user.exp}
💡 Limit: ${user.limit}
💰 Money: ${user.money}
🏦 Bank: ${user.bank}
🔒 Premium: ${prems}
📌 Registered: ${user.registered ?  '✅': '❎'}
⛔Banned: ${user.banned ? '✅': '❎'}

*INVENTORY*
🥤potion |  ${user.potion}
🗑trash |  ${user.trash}
🪵wood |  ${user.wood}
🪨rock |  ${user.rock}
🕸️string | ${user.string}
⛓️iron |  ${user.iron}
💎diamond | ${user.diamond}
💚emerald |  ${user.emerald}
`

conn.sendMessage(m.chat, { image: { url: pp}, caption: capt}, m)
}
handler.help = ['profile']
handler.tags = ['main']
handler.command = /^(profile)?$/i

handler.group = false

export default handler