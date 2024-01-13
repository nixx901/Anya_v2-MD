import fetch from  'node-fetch'

let handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `Masukan Linknya\nExample; ${usedPrefix}${command} https://www.facebook.com/100010929794713/posts/1885825845125057/`
	let res = await fetch(`https://api.zahwazein.xyz/downloader/facebook?apikey=zenzkey_ace5210290df&url=${text}`)
  let x = await res.json()
  let cap = `Judul: ${x.title}`
 let vurl = x.result.media[0].url
   
  conn.sendMessage(m.chat, {video: { url: vurl}, caption: "Ini kakak"}, m)
}
handler.help = ['facebook']
handler.tags = ['downloader']
handler.command = /^(facebook|fbdl|fb|facebookdl)$/i
handler.limit = true

export default handler
