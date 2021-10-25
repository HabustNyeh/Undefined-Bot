let handler  = async (m, { conn, text}) => {
	if (!text) {
    await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.endConnection() }
    else if (text) {
    	 let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  for (let id of groups) await conn.copyNForward(id, conn.cMod(m.chat, cc, /stop|berhenti/i.test(teks) ? teks : teks + '\n' + readMore + `「 ${new Date} 」\n`), true).catch(_=>_)
  conn.close()
  conn.close() 
  conn.close() 
}
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
