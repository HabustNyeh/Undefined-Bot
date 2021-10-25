let handler = async (m, { conn, text }) => {
  let user = global.DATABASE.data.users[m.sender]
  if(user.acc == true) {
  user.afk = + new Date
  user.afkReason = text
  if (!text) {
  	conn.reply(m.chat,`
${conn.getName(m.sender)} sekarang afk, tanpa alasan
`,m.text, m
)
                } else if (text) {
  conn.reply(m.chat,`
${conn.getName(m.sender)} sekarang afk, dengan alasan ${text ? '' + text : ''}
`,m.text, m
)}}
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
