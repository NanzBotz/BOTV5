let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
┏━━°❀❬ *INFO* ❭❀°━━┓
┃
┃> Bot Recoded By :
┃• LOYO - BOTZ
┃
┃> Bot Dibuat Dengan :
┃• JavaScript via NodeJS
┃• FFmpeg
┃
┃> Thanks To :
┃• Nurutomo
┃• Drawl Nag
┃• RC047/Kuhong
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [085893228346]
┣➥ *Dana:* [085893228346]
┣➥ *Gopay:* [085893228346]
┣➥ *Saweria:* [https://saweria.co/Tetekbesar]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? https://wa.me/6285893228346*
┗━━━━━━━━━━━━━━━━
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
