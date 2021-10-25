let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	if (!text) throw `Format salah
contoh: /warntask ban atau /warntask kick`
	let chat = global.db.data.chats[m.chat]
	if (text == 'ban') {
	chat.warn = 'ban'
	conn.reply(m.chat, `Berhasil menjadikan set warn menjadi ${text}`) }
	if (text == 'kick') {
		chat.warn = 'kick'
		conn.reply(m.chat, `Berhasil menjadikan set warn menjadi ${text}`) }
	}

handler.help = ['warntask ban/kick']
handler.tags = ['admin']
handler.command = /^w(arntask)$/
handler.rowner = false
handler.group = true
handler.admin = true

module.exports = handler

