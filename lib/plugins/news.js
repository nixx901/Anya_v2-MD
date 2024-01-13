let handler = async (m, { args, usedPrefix, text, command }) => { 


conn.sendMessage(m.chat,{image:{url: text}, caption:''}, {quoted:m })
}

handler.command = /^a?$/i
handler.limit = true

handler.fail = null

export default handler

