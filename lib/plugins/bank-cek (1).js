let handler = async(m, { conn, text, participants }) => {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
		
		
		
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Krpey\nNICKNAME: olap\nORG: Kreiy\nTITLE:\nitem1.TEL;waid=6285648514679:6285648514679\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://google.com\nitem2.EMAIL;type=INTERNET: -\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`,
"conversation" : "Group Notify"
		}
	},
	"participant": "0@s.whatsapp.net"
}
     conn.sendMessage(m.chat, { text: text, mentions: participants.map(a => a.id) }, {quoted:q})
}
handler.help = ['hidetag <pesan>']
handler.tags = ['group']
handler.command = /^(hid)$/i

handler.group = true
handler.admin = true
handler.owner = false
handler.premium = false

export default handler