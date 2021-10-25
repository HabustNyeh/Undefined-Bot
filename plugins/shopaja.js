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
    - durability: 150
  - besi
    - 5000000
    - durability: 200
  - Gold
    - 3000000
    - durability: 175
  - Diamond
    - 10000000
    - durability: 300
  - Netherite
    - 1000000000
    - durability: 500
  - God
    - PC OWNER
    - durability: ?? 
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
               invu.durabilty += 150
               }
            }
       if (text == 'rod besi') {
           if (invu.moneyfish < bass) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > bass) {
               conn.reply(m.chat, `Berhasil membeli pancingan besi`) 
               invu.rod = 'besi'
               invu.moneyfish -= bass
               invu.durabilty += 200
               }
            }
        if (text == 'rod gold') {
           if (invu.moneyfish < gols) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > gols) {
               conn.reply(m.chat, `Berhasil membeli pancingan gold`) 
               invu.rod = 'gold'
               invu.moneyfish -= gols
               invu.durabilty += 175
               }
            }
        if (text == 'rod diamond') {
	
           if (invu.moneyfish < dias)  throw 'Uang lu gk ada ego'
           if (invu.moneyfish > dias) {
               conn.reply(m.chat, `Berhasil membeli pancingan diamond`) 
               invu.rod = 'diamond'
               invu.moneyfish -= dias
               invu.durabilty += 300
               }
            }
        if (text == 'rod netherite'){
	
           if (invu.moneyfish < nets) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > nets) {
               conn.reply(m.chat, `Berhasil membeli pancingan Netherite`) 
               invu.rod = '*Netherite*'
               invu.moneyfish -= nets
               invu.durabilty += 500
               }
            }
        if (text == 'rod raihan'){
	
           if (invu.moneyfish < 1) throw 'Uang lu gk ada ego'
           if (invu.moneyfish > 1) {
               conn.reply(m.chat, `Berhasil membeli pancingan Raihans`) 
               invu.rod = '*Netherite*'
               invu.moneyfish += 20000000
               invu.durabilty += 10000
               }
            }
       
  }

handler.help = ['shop']
handler.tags = ['main']
handler.command = /^s(hop)$/
handler.rowner = false

module.exports = handler
