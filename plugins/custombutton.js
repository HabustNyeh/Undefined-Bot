let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, args}) => { 
	await conn.send2Button(m.chat, text.trim(),'©Undefined bot', `${args[0]}`, '.args1',`${args[1]}`,'.args2')}
handler.help = ['custombutton']
handler.tags = ['main']
handler.command = /^c(ustombutton)$/i

module.exports = handler
