let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys') 

let handler = async (m, { conn }) => {
let readdir = fs.readdirSync('src/video')
let vn = readdir[Math.floor(Math.random() * readdir.length)]
let nv = fs.readFileSync('src/video/'+vn)
await conn.reply(m.chat, nv, m) 
}
handler.customPrefix = /^edit$/i
handler.command = new RegExp  
module.exports = handler