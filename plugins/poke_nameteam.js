let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix}) => {
	let pokemon = global.db.data.pokerole[m.sender]
	if (!text) throw ``
	if (text) {
		pokemon.nameteam = text
		conn.reply(m.chat, `Nama Team Kamu sudah diganti menjadi ${text}`) 
		}
}
handler.help = ['pokenameteam']
handler.tags = ['main']
handler.command = /^p(oke)(name|nama)(tim|team)$/i

module.exports = handler

