let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *B A N K  U S E R* 」
│
│ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ *Bank:* ${user.bank} 💲 
│ *Money:* ${user.money} 💲
│ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ *Registered:* ${user.registered ? 'Ya':'Tidak'}
└────────────────────
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/6eaadd940239ad15685c4.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler
