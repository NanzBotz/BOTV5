let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/tag.webp')
conn.fakeReply(m.chat, stc, '6285893228346@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6285893228346)$/i
handler.command = new RegExp

module.exports = handler
