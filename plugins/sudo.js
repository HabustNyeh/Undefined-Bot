const { newMessagesDB } = require("@adiwajshing/baileys")

let handler = async (m, { conn, text }) => {
  if (!text) throw `command nya apa blok`
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  let user = global.db.data.users
  if (!who) throw 'Tag salah satu lah'
  txt = text.replace('@' + who.split`@`[0], '').trimStart()
  if (user[who].afk > 1) {
  	conn.reply(m.chat, ` Kamu Tidak Boleh Sudo Orang Afk`) 
  }
  if (user[who].afk == -1) {
  conn.emit('chat-update', {
    jid: who,
    hasNewMessage: true,
    messages: newMessagesDB([conn.cMod(m.chat, m, txt, who)])
  })}
}
handler.command = /^sudo$/
handler.owner = true

module.exports = handler