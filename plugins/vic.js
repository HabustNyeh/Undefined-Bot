let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send4ButtonLoc(m.chat, await (await fetch(fla + 'Victrius Store')).buffer(), `
<<<<<<< HEAD
┌〔 Victrius Store 〕
├ WhatsApp : -
╰ Discord     : https://discord.io/Victrius-Store 
`.trim(), `©Undefined Bot
© Victrius Store`, 'Vps', '.vps','Provider', '.provider', 'Payment', '.payment', 'Vcc', '.vcc')
=======
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ariffb
├ https://trakteer.id/ariffb/tip
└────
`.trim(), `©Undefined Bot
© Victrius Stoee`, 'Vps', '.vps','Provider', '.provider', 'Payment', '.payment', 'Vcc', '.vcc')
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
handler.help = ['vicstore']
handler.tags = ['vicstore']
handler.command = /^vicstore$/i

module.exports = handler
