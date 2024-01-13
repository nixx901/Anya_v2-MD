import { artimimpi } from '@bochilteam/scraper';

// Fungsi polifil untuk matchAll
function matchAll(str, regexp) {
  const matches = [];
  str.replace(regexp, function() {
    const arr = Array.prototype.slice.call(arguments, 0, -2);
    matches.push(Object.assign(arr, {
      input: arguments[arguments.length - 1],
      index: arguments[arguments.length - 2],
    }));
  });
  return matches.length ? matches : null;
}

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) throw `Misal mimpi tentang makan bersama keluarga ketik ${usedPrefix}${command} keluarga `;
  const result = await artimimpi(text);

  // Menyesuaikan dengan output dari fungsi artimimpi
  const output = result.map((item, index) => {
    return `Tafsir Mimpi ${index + 1}:
    ${item}
    -----------------------------------`;
  }).join('\n\n');

  m.reply(output);
};

handler.help = ['artimimpi'].map(v => v + ' [apa]');
handler.tags = ['primbon'];
handler.command = /^(artimimpi)$/i;

export default handler;
