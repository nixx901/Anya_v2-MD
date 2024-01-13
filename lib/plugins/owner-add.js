import fetch from 'node-fetch'
/**
 * @type {import('@adiwajshing/baileys')}
 */
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
    await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
}

handler.help = ['add', '+']
handler.tags = ['owner']
handler.command = /^(oadd|o\+)$/i

handler.owner = true
handler.group = true
handler.botAdmin = true


export default handler

