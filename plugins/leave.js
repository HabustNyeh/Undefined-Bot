let handler = async(m, { conn, text }) => {
let su = global.db.data.chats[m.chat]

if (!text) {
	let anjay = '\n@subject\n'
	opts['restrict'] == false
	conn.groupLeave(m.chat)
	for (let jid of global.you.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
	m.reply(`Bot di suruh keluar sama ${m.sender}`, jid) }
if (text) {
	let anjay = '\n@subject\n'
	opts['restrict'] == false
	conn.groupLeave(m.chat)
	for (let jid of global.you.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
	m.reply(`Bot di suruh keluar sama ${m.sender} karena ${text}`, jid) }
	}
handler.help = ['keluar']
handler.tags = ['admin']
handler.admin = true
handler.group = true
handler.command = /^(keluar)$/i

module.exports = handler