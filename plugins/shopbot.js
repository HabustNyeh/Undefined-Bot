let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let kays = 5000
let bats = 2000000
let bass = 5000000
let gols = 3000000
let dias = 10000000
let nets = 1000000000
let handler = async (m, { conn, text, usedPrefix}) => {
	let user = global.db.data.users[m.sender]
        let invu = global.db.data.invmenu[m.sender]
        if (!text) throw `Tipe:
- rod
  - kayu
    - 5000
    - durability: 100
  - batu
    - 2000000
    - durability: 5000
  - besi
    - 5000000
    - durability: 20000
  - Gold
    - 3000000
    - durability: 15000
  - Diamond
    - 10000000
    - durability: 3000000
  - Netherite
    - 1000000000
    - durability: 50000000000
  - God
    - PC OWNER
    - durability: ?? 
  - *Raihan*
    - durability: 10000000000
- bait
- boat
- hoki
- premium`
       if (text == 'rod') throw 'pancingan apa ego'
       if (text == 'rod kayu') 
         {
               if (invu.moneyfish < kays) throw 'Uang kurang'
               if (invu.moneyfish > kays) 
               {
               conn.reply(m.chat, `Berhasil membeli pancingan kayu`) 
               invu.rod = 'kayu'
               invu.moneyfish -= kays
               invu.durability += 100
               }
          }
       if (text == 'rod batu') {
           if (invu.moneyfish < bats) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > bats) {
               conn.reply(m.chat, `Berhasil membeli pancingan batu`) 
               invu.rod = 'batu'
               invu.moneyfish -= bats
               invu.durabilty += 5000
               }
            }
       if (text == 'rod besi') {
           if (invu.moneyfish < bass) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > bass) {
               conn.reply(m.chat, `Berhasil membeli pancingan besi`) 
               invu.rod = 'besi'
               invu.moneyfish -= bass
               invu.durabilty += 20000
               }
            }
        if (text == 'rod gold') {
           if (invu.moneyfish < gols) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > gols) {
               conn.reply(m.chat, `Berhasil membeli pancingan gold`) 
               invu.rod = 'gold'
               invu.moneyfish -= gols
               invu.durabilty += 15000
               }
            }
        if (text == 'rod diamond') {
	
           if (invu.moneyfish < dias)  throw 'Uang lu gk ada ego'
           if (invu.moneyfish > dias) {
               conn.reply(m.chat, `Berhasil membeli pancingan diamond`) 
               invu.rod = 'diamond'
               invu.moneyfish -= dias
               invu.durabilty += 3000000
               }
            }
        if (text == 'rod netherite'){
	
           if (invu.moneyfish < nets) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > nets) {
               conn.reply(m.chat, `Berhasil membeli pancingan Netherite`) 
               invu.rod = '*Netherite*'
               invu.moneyfish -= nets
               invu.durabilty += 50000000000
               }
            }
        if (text == 'rod raihan'){
	
           if (user.raihan == false) throw 'Kamu Bukan Raihan-Chan'
           if (user.raihan == true) {
               conn.reply(m.chat, `Raihan-Chan berhasil mengambil rod nya`) 
               invu.rod = '*Raihan-Chan*'
               invu.durabilty += 10000000000
               }
            }
       
  }

handler.help = ['shop']
handler.tags = ['main']
handler.command = /^s(hop)$/
handler.rowner = false

module.exports = handler