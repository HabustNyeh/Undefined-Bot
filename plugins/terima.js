let fetch = require('node-fetch') 
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.acc === true) {
  	conn.reply(m.chat, `Kamu Sudah Terima Rules Bot`,m) 
  }
  if (user.acc === false) {
  	conn.sendButtonLoc(m.chat, await(await fetch(fla + 'Accepted Rules Bot')).buffer(), `Terima Kasih sudah menerima Rules Undefined bot
  Kami Harap kamu Tidak melanggarnya
  
  Hormat kami Staff Undefined Bot`, '©Undefined Bot', 'Menu', '.menu', m)
  user.acc = true
  }

}

handler.command = /^(terima)$/i

module.exports = handler

