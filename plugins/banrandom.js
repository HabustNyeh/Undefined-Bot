let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`Orang Ditemukan, ${toM(a)} `, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['pickrandom']
handler.tags = ['main']
handler.command = /^pick(random)$/i
handler.group = true
handler.owner = true

module.exports = handler