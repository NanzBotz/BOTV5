let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *INDOSAT:* 085893228346
• *DANA:* 085893228346

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
https://saweria.co/tetekbesar

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285893228346', 'Own Loyo', idnya)
  }
  return true
}

module.exports = handler