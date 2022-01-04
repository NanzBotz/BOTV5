let { WAMessageProto, MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
let PhoneNumber = require('awesome-phonenumber')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
const os = require('os')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const groupsIn = groups.filter(v => !v.read_only)
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi'
				if (jam >= '03' && jam <= '10') {
				ucapanWaktu = 'Selamat Pagi'
				} else if (jam >= '10' && jam <= '13') {
				ucapanWaktu = 'Selamat Siang'
				} else if (jam >= '13' && jam <= '18') {
				ucapanWaktu = 'Selamat Sore'
				} else if (jam >= '18' && jam <= '23') {
				ucapanWaktu = 'Selamat Malam'
				} else {
				ucapanWaktu = 'Selamat Malam'
				} 
let handler = async (m, { conn, text }) => {
try {
imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = 'https://telegra.ph/file/c439331e533ff281e8bda.jpg'
}
 let buttons = [
  {buttonId: '.owner', buttonText: {displayText: '𝙾𝚆𝙽𝙴𝚁'}, type: 1},
   {buttonId: '.rules', buttonText: {displayText: '𝚁𝚄𝙻𝙴𝚂'}, type: 1}
]
const buttonsMessage = {
    contentText: `
    
Halo ${conn.getName(m.sender)}
✗⃝🐲 *Bot Info*  ✗⃝🐲
Wa Version : ${conn.user.phone.wa_version}
Bot Number : ${conn.getName(conn.user.jid)}
Prefix : [ Multi Prefix ]
Youtube : https://bit.ly/3hg3bm4
My Grup : https://bit.ly/3pAP4um
༺═──────────────═༻
ꪶ🐲ꫂ *EXP & LIMIT* ꪶ🐲ꫂ
>.peti
>.buy (jumlah limit)
>.buyall
>.cheat (limit)
>.daily
>.claim
>.dompet
>.gift @user (jumblah)
>.kerja (limit)
>.lb
>.payext @user (amount)
>.paylimit
>.topmoney
>.unreg (sn)
>.unregister
*Absensi Menu*
>.absen
>.cekabsen
>.hapusabsen
>.mulaiabsen (text)
*Anime Menu*
>.anime
>.animelink
>.character
>.ppcouple
>.husbu
>.loli
>.kosunime
>.waifu
>.wibu
*Audio Menu*
>.bass
>.blown
>.deep
>.robot
>.tupai
>.tovn
>.slow
>.smoth
>.fat
*Rondom Menu*
>.bucin
>.bacot
>.galau
>.faktaunik
>.gombal
>.kisahnabi
>.fakta
>.sholawat
>.quran
*Kerang Menu*
>.apakah
>.artimimpi
>.benarkah
>.bisakah
>.kapankah
>.siapakah
>.kapan
*News Menu*
>.berita
>.news
>.infobmkg
>.infogempa
*Adventure Menu*
>.berburu
>.mancing
>.adventure
>.petualangan
>.berpetualang
>.mulung
>.work
>.feed (pet type)
>.gaji
>.gajian
>.inv
>.judi (jumblah)
>.levelup
>.nebang
>.nyambah
>.open (create)
>.gacha (create)
>.shop (sell|buyy) (args)
>.toko (sell|buyy) (args)
>.slots
>.jackpot
>.menanam
>.transfer
>.tukar coin
>.tukarall
>.tukarxp
>.tukarsemuah
>.tukarmoney
>.use
>.heal
*hadiah*
>.bonus
>.hadiah
>.buygift
>.freegift
>.gift
>.sc
*dewasa menu*
>.filebokep
>.bokep
>.indohot
>.hentai
>.cersex
>.ero
>.nekopoi
>.yuri
*grup menu*
>.add 62***
>.afk (alasan)
>.tagall
>.tagme
>.linkgroup
>.leave
>.setpp
>.siapa
>.siapakah
>.totalpesan
*fun menu*
>.kuis
>.math
>.gaycek
>.caklontong
>.cari
>.family100
>.suit
>.tebakgambar
>.tebakbendera
>.tebakanime
>.tebakkata
>.tekateki
>.totalcek
*owner menu*
>.addowner
>.addprem
>.balas
>.ban
>.bcgc
>.bcnowm
>.block
>.delprem
>.setprefix
>.setbio
>.ban
>.stop
>.setmenu
>.premiumlist
*FITUR SEBENERNYA MASIH BANYAK TAPI OWNER CAPE NULIS LIST MENU SEMUAH BOT NYA:V FITUR ADA 1RB+ BANTU DONASI YA BIAR OWNER SEMANGAT PULSA* 083146208804 *MAKASIH*
`.trim(),    footerText: 'Bot Merespon Dalam 761.6472300291061 MS No Spam Pleas Herman Botz' ,
    buttons: buttons,
  imageMessage: await conn.toMSG({ url: imeg }, 'imageMessage'),
  headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ 
quoted: { 
  key: {
  fromMe: false,
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(DATABASE.data.users).length, 
thumbnail: await (await require('node-fetch')(imeg)).buffer(),
    message: `Hai ${conn.getName(m.sender)}\nUptime : ${clockString(process.uptime() * 1000)}`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
   }
   }} })

conn.relayWAMessage(sendMsg)
}
handler.command = /^(menu)$/i

module.exports = handler

function waktu(seconds) { 
seconds = Number(seconds); 
var d = Math.floor(seconds / (3600 * 24)); 
var h = Math.floor(seconds % (3600 * 24) / 3600); var m = Math.floor(seconds % 3600 / 60); 
var s = Math.floor(seconds % 60); 
var dDisplay = d > 0 ? d + (d == 1 ? " Hari,":" Hari,") : ""; 
var hDisplay = h > 0 ? h + (h == 1 ? " Jam,":" Jam,") : ""; 
var mDisplay = m > 0 ? m + (m == 1 ? " Menit,":" Menit,") : ""; 
var sDisplay = s > 0 ? s + (s == 1 ? " Detik,":" Detik") : ""; 
return dDisplay + hDisplay + mDisplay + sDisplay; 
}