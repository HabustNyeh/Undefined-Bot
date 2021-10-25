let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Siapa yang mau di unbanned?'
    let users = global.db.data.users
    if (users[m.sender].police == true) {
    	if (users[m.sender].banned == false) {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
    } else if (users[m.sender].banned == true) {
    	conn.reply(m.chat, `Kamu sedang di Ban Police!`, m) }
    } else { 
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    users[who].banned = false
    conn.reply(m.chat, `berhasil unbanned`, m)
    }
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = false
handler.police = true

module.exports = handler
