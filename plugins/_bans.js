let handler = m => m

handler.before = function (m { usedPrefix, text } ) {
  let user = global.db.data.users[m.sender]
  if (user.exp < 0) {
  user.ban = true
  conn.reply(m.chat, `Kamu di Ban`) }
  if (user.limit < 0) {
  	user.ban = true
   }
  return true
}

module.exports = handler