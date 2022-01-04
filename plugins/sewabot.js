const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa seminggu : 10k
Sewa Perbulan : 20k

*Payment :*
_Pulsa Dan Dana_

Minat?PC
Wa.me/6285893228346
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler