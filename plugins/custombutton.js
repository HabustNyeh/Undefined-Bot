let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, args}) => {

let [jaw1, jaw2, per] = text.split("|")
await conn.send2Button(m.chat, per, '©Undefined Bot', `${jaw1}`, '.args1', `${jaw2}`, '.args2') 
}
handler.help = ['custombutton jawaban1 | jawaban2 | pertanyaan']
handler.tags = ['main']
handler.command = /^c(ustombutton)$/i

module.exports = handler