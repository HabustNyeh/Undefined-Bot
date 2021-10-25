let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text,participants }) => {
	let as = global.db.data.users[m.sender]
	if (as.group == true) {
		conn.reply(m.chat, `Kamu sudah invite bot`) }
    if (as.group == false) {
    	if (as.limit < 50000) {
    	conn.reply(m.chat, `Limit kamu kurang ${50000 - as.limit}`, m) }
    	if(as.limit > 50000) {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    let a = new Date();
    let d = a.setTime(a.getTime() + 2592000000);
    console.log(d)
    console.log(`join grup`) 
    let timeout = 5000
    function expireds() {
    	let aa = global.teks.data.res[m.sender]
             conn.reply(res.gid, `Bot Disewa ${conn.getName(m.sender)} selama 30 hari kedepan`); 
             as.expiredgroup = d
             as.id = res.gid
             for (let jid of global.you.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
             if (as.premium == false) {
             as.group = true
             }
             else if (as.premium == true) {
             	as.group = false
             }
             else if (m.sender == jid) {
             	as.group = false
             }
        }
        function police() {
        	conn.reply(res.gid, `Sedang mengundang police bot`) 
        }
        function join() {
        	for (let jid of global.police.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
        	m.reply(`Police Bot, join ya https://chat.whatsapp.com/${code}`, jid)
        }
    setTimeout(expireds, timeout);
    setTimeout(police, timeout);
    setTimeout(join, timeout)
    m.reply(`Berhasil join grup ${res.gid}`)
    }}
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']
handler.command = /^join$/i

module.exports = handler
