let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *OVO*: -
║│➸ *DANA*: 085893228346
║│➸ *PULSA*:085893228346
║│➸ *GOPAY*: 085893228346
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY LOYO BOTZ*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 LOTO BOTZ 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(PEMBAYARAN)$/i
handler.command = new RegExp

module.exports = handler
 