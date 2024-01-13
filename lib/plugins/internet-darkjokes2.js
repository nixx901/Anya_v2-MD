let handler = async (m, { conn, usedPrefix, command }) => {
	
   conn.sendMessage(m.chat, { image: {url: `https://api.zahwazein.xyz/randomimage/darkjoke?apikey=zenzkey_d928ce4e47d5`}}, {quoted: m})
   }
handler.help = ['darkjoke2']
handler.tags = ['internet']
handler.command = ['darkjoke2'] 
handler.diamond = true

export default handler


