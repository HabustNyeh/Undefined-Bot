let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch') 
let handler = async (m, { conn, text }) => {
	if(!text) {
		text = 'gajelas lu anjing'
		await conn.reply(m.chat, await (await fetch(fla + `${text}`)).buffer())}
		else if (text) {
await conn.reply(m.chat, await (await fetch(fla + `${text}`)).buffer())
}
  }
  
  handler.help = ['buat']
handler.tags = ['main']
handler.command = /^(buat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
module.exports = handler
