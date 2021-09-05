let { MessageType } = require('@adiwajshing/baileys') 
let { fetchJson } = require('./lib/fetcher.js') 
let handler = async (m, { conn, text, usedPrefix}) => {
                    if (!text) throw `Format Salah! 
 *Contoh*: ${usedPrefix}spamsms 08**********`
                    let nomor = parseInt(text) 
                    let apikey = yourapikeylolhuman
                    try {
                        await m.reply(`Sedang melakukan spam`) 
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${apikey}&nomor=${nomor}`)
                        await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${apikey}&nomor=${nomor}`)
                        conn.reply(m.chat, `Berhasil Spam ${nomor}`) 
                    } catch (e)
                    {
                    conn.reply (m.chat, `Gagal spam sms! Coba lagi nanti`, m) 
                    throw e
                    }
                }
handler.help = ['spamsms']
handler.tags = ['premium']
handler.command = /^sp(amsms)?(smsspam)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
