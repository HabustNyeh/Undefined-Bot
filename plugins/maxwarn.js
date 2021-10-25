let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, isAdmin, isBotAdmin}) => {
	if (!text) throw `What?`
	let chat = global.db.data.chats[m.chat]
	if (isNaN(text)) throw `Angka kak bukan kata`
	if (m.isGroup) {
        if (!isAdmin) {
          global.dfail('admin', m, conn)
          throw false
        }
      else if (!isBotAdmin) {
        global.dfail('botadmin', m, conn)
        throw false
      }
      chat.maxwarn = parseInt(text) 
	  conn.reply(m.chat, `Berhasil menjadikan max warn sejumlah ${text}`) 
	}
}

handler.help = ['maxwarn']
handler.tags = ['admin']
handler.command = /^m(axwarn)$/
module.exports = handler

