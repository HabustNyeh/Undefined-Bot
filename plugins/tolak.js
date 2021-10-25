let fetch = require('node-fetch') 
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.acc === true) {
  	conn.reply(m.chat, `Terima Kasih Sudah menggunakan Undefined Bot`,m) 
      user.acc = false
  }
  if (user.acc === false) {
  	conn.sendButtonLoc(m.chat, await(await fetch(fla + ' Rejected Rules Bot')).buffer(), `Terima Kasih sudah membaca Rules Undefined bot
  
  Hormat kami Staff Undefined Bot`, '©Undefined Bot', 'Menu', '.menu', m)
  }

}

handler.command = /^(tolak)$/i

module.exports = handler

