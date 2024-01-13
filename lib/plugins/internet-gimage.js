import { googleImage } from '@bochilteam/scraper';
import axios from 'axios'
var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`;

  
    const res = await googleImage(text);
    let image = res.getRandom();
    let link = image;

    // Check if the link is valid by making a HEAD request
    const response = await axios.head(link);
      await conn.sendFile(m.chat, link, 'google.jpg', `*Result:* ${text}\n*Source:* Google`, m);
   }

handler.help = ['gimage'];
handler.tags = ['internet'];
handler.command = /^(gimage|image)$/i;

export default handler;
