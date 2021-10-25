let util = require('util')
let path = require('path')
let handler  = async (m, {conn, args, text, prefix}) => {
	let chat = global.db.data.chats[m.chat]
	if (chat.warn == false) return
	if (chat.warn == true) {
let user = global.db.data.users[m.sender]
if (prefix == 'masuk') return
user.warn += 1
m.reply(`Kamu terdeteksi Toxic, Kamu mendapatkan 1 Warn, 
Kamu memiliki ${user.warn}warn`) 
}}

handler.customPrefix = /a(nj|njg|njing)|ng(entod|entot)|e(ntod) |b(a b i | babi)|k(ontol|ntl)|m(emek|mk)|g(oblok|blk)/i
handler.command = new RegExp
module.exports = handler