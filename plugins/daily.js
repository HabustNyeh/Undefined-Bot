const free = 500
let handler = async (m) => {
	let user = global.db.data.users[m.sender]
	if (user.acc == true) {
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw 'Anda sudah mengklaim klaim harian hari ini'
  global.db.data.users[m.sender].exp += free
  global.db.data.users[m.sender].spin += 10
  m.reply(`+${free} XP dan + 10 Spin`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}}
handler.help = ['daily', 'claim']
handler.tags = ['xp']
handler.command = /^(daily|claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

