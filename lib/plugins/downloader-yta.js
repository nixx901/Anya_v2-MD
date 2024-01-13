import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

var handler = async (m, { conn, args, text }) => {
 m.reply(`ytmp3 sedang error silakan download video youtube memakai situs https://www.y2mate.com/id788`)
}

// Jika ingin menambahkan tag, ubah code berikut:
handler.tags = ['downloader']
handler.help = ['ytmp3']
handler.command = /^ytmp3|youtubemp3$/i
export default handler