let handler = async (m, { conn, text }) => {
	let users = global.db.data.users
	let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if  (!who) throw 'Owner Stress'
    if (users[who].police == false) {
    	conn.reply(m.chat, `Dia Bukan Police`) }
    if (users[who].police == true) {
    users[who].police = false
    console.log(`masa premium habis`) 
    conn.reply(m.chat, `Masa police kamu habis karena ${text}`) } }
    
handler.help = ['dpolice'] 
handler.tags = ['owner']
handler.command = /^d(police)$/
handler.helper = false
handler.rowner = true

module.exports = handler
