import cheerio from 'cheerio'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `${usedPrefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN (linknya ambil dari playstore)`

	await m.reply(wait)
	
const downloadApk = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Download failed. HTTP status: ${response.status}`);
    }

    const buffer = await response.buffer();
    console.log('Download successful.');
    return buffer;
  } catch (error) {
    console.error('Error during download:', error.message);
    return null;
  }
};

// Contoh penggunaan

let link = "https://play.google.com/store/apps/details?id=com.puransoftware.archeryblack";
let regex = /id=(.*)/;
let match = text.match(regex);
let yours = match[1]
let jadinya = `https://d.apkpure.com/b/APK/${yours}?version=latest`
  const hasil = await downloadApk(text);
	conn.sendFile(m.chat, jadinya, `${yours}.apk`, '', m)
}
handler.help = handler.alias = ['apkdl']
handler.tags = ['downloader']
handler.command = /^(apkdl)$/i
handler.limit = true
export default handler
