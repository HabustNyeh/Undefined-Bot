let { MessageType } = require('@adiwajshing/baileys')
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let handler = async (m, { conn, text, usedPrefix}) => {
	let user = global.db.data.users[m.sender]
	if (user.acc == true) {
	let hoki1 = pickRandom(['1', '2', '3']) 
	let na = 1 * hoki1
	let sa = 26
	let xpf
    let mancing = global.db.data.invmenu[m.sender]
    if (mancing.hancur === true) {
conn.reply(m.chat, `Pancingan Kamu Rusak, beli yang baru, dengan cara ${usedPrefix}shop rod`, m) }
    if (mancing.hancur === false) 
    {
        let haha
       let as1 = pickRandom(['1', '1', '1', '1', '2', '1', '1', '1']) 
       let as2 = pickRandom(['1', '1', '2', '1', '2', '1', '1', '1']) 
       let as3 = pickRandom(['1', '1', '2', '2', '2', '1', '1', '1']) 
        if (mancing.rod == 'kayu') {
            haha = 1 * 1 * as1
        } else if (mancing.rod == 'batu') {
            haha = 2 * 1 * as2
        } else if (mancing.rod == 'besi') {
            haha = 3 * 1 * as3
        }
	let hoki1 = pickRandom(['1', '2', '3']) 
	let hoki2 = pickRandom(['2', '3', '4']) 
	let hoki3 = pickRandom(['3', '4', '5']) 
	let na = 1 * hoki1 * haha
    let na2 = 1 * hoki2 * haha
    let na3 = 1 * hoki3 * haha
	let su = pickRandom(['100', '150', '50', '200', '250', '300']) 
	let anj1 = su * hoki1
	let anj2 = su * hoki2
	let anj3 = su * hoki3
	let sa = 25
    let sa2 = 50
    let sa3 = 75
        let dur
        let pick1 = pickRandom(['0', '2', '2', '2', '1']) 
        let pick2 = pickRandom(['0', '1', '2', '2', '1']) 
        
      if (mancing.rod == 'kayu') {
          if (user.hoki < sa) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'sampah', 'sampah', 'sampah', 'sampah', 'sampah', 'banned', 'banned', 'banned'])
             let min = 1 * hoki1
              if (hasil === "sampah")
             {
                   mancing.sampah += na
                   mancing.durability -= min
                   mancing.xpfish += anj1
              }
              else if (hasil === "cod") {
              mancing.cod += na
              mancing.durability -= min
              mancing.xpfish += anj1
               }
               else if (hasil === "tropical") {
                mancing.tropical += na
                mancing.durability -= min
                mancing.xpfish += anj1
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na
                mancing.durability -= min
                mancing.xpfish += anj1
                } else if (hasil === "Golden") {
               mancing.golden += na
               mancing.durability -= min
               mancing.xpfish += anj1
               }
              else if (hasil === "puffer") {
              mancing.puffer += na
              mancing.durability -= min
               mancing.xpfish += anj1
               } else if (hasil === "banned") {
               	user.banned = true
                   conn.reply(m.chat, `Kamu mendapatkan Banned`, m) 
                   } 
                conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na} ${hasil} dan mendapatkan + ${anj1} xpfish dan durability fishing rod mu - ${min}`, m) 
              } else if (user.hoki >= sa) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'sampah', 'sampah', 'tropical', 'puffer', 'Golden', 'banned', 'banned'])
              let min = 1 * 1
              let sial = anj1 * 5
              if (hasil === "sampah")
             {
                   mancing.sampah += na
                   mancing.durability -= min
                   mancing.xpfish += sial
              }
              else if (hasil === "cod") {
              mancing.cod += na
              mancing.durability -= min
              mancing.xpfish += sial
               }
               else if (hasil === "tropical") {
                mancing.tropical += na
                mancing.durability -= min
                mancing.xpfish += sial
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na
                mancing.durability -= min
                mancing.xpfish += sial
                } else if (hasil === "Golden") {
               mancing.golden += na
               mancing.durability -= min
               mancing.xpfish += sial
               }
              else if (hasil === "puffer") {
              mancing.puffer += na
              mancing.durability -= min
               mancing.xpfish += sial
               } else if (hasil === "banned") {
               	user.banned = true
                   conn.reply(m.chat,`Kamu mendaptkan Banned`, m) 
                   } 
               conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na} ${hasil} dan mendapatkan + ${sial} xpfish dan durability fishing rod mu - ${min}`,m) 
               }
               }
        else if (mancing.rod == 'batu') {
          if (user.hoki < sa2) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'sampah', 'sampah', 'sampah', 'tropical', 'Golden'])
              let min = 1 * hoki2
              if (hasil === "sampah")
             {
                   mancing.sampah += na2
                   mancing.durability -= min
                   mancing.xpfish += anj2
              }
              else if (hasil === "cod") {
              mancing.cod += na2
              mancing.durability -= min
              mancing.xpfish += anj2
               }
               else if (hasil === "tropical") {
                mancing.tropical += na2
                mancing.durability -= min
                mancing.xpfish += anj2
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na2
                mancing.durability -= min
                mancing.xpfish += anj2
                } else if (hasil === "Golden") {
               mancing.golden += na2
               mancing.durability -= min
               mancing.xpfish += anj2
               }
              else if (hasil === "puffer") {
              mancing.puffer += na2
              mancing.durability -= min
               mancing.xpfish += anj2
               }
               conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na2} ${hasil} dan mendapatkan + ${anj2} xpfish dan durability fishing rod mu - ${min}`,m) 
                } else if (user.hoki >= sa2) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'puffer', 'salmon', 'sampah', 'sampah', 'Golden', 'sampah', 'Golden'])
              let min = 1 * 2
              let sial = anj2 * 5
              if (hasil === "sampah")
             {
                   mancing.sampah += na2
                   mancing.durability -= min
                   mancing.xpfish += sial
              }
              else if (hasil === "cod") {
              mancing.cod += na2
              mancing.durability -= min
              mancing.xpfish += sial
               }
               else if (hasil === "tropical") {
                mancing.tropical += na2
                mancing.durability -= min
                mancing.xpfish += sial
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na2
                mancing.durability -= min
                mancing.xpfish += sial
                } else if (hasil === "Golden") {
               mancing.golden += na2
               mancing.durability -= min
               mancing.xpfish += sial
               }
              else if (hasil === "puffer") {
              mancing.puffer += na2
              mancing.durability -= min
               mancing.xpfish += sial
               }
               conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na2} ${hasil} dan mendapatkan + ${sial} xpfish dan durability fishing rod mu - ${min}`,m) 
               }
               } else if (mancing.rod == 'besi') {
          if (user.hoki < sa3) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'salmon', 'salmon', 'banned', 'sampah', 'puffer', 'tropical', 'Golden'])
              let min = 1 * hoki3
              if (hasil === "sampah")
             {
                   mancing.sampah += na3
                   mancing.durability -= min
                   mancing.xpfish += anj3
              }
              else if (hasil === "cod") {
              mancing.cod += na3
              mancing.durability -= min
              mancing.xpfish += anj3
               }
               else if (hasil === "tropical") {
                mancing.tropical += na3
                mancing.durability -= min
                mancing.xpfish += anj3
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na3
                mancing.durability -= min
                mancing.xpfish += anj3
                } else if (hasil === "Golden") {
               mancing.golden += na3
               mancing.durability -= min
               mancing.xpfish += anj3
               }
              else if (hasil === "puffer") {
              mancing.puffer += na3
              mancing.durability -= min
               mancing.xpfish += anj3
               }
               else if (hasil === "banned") {
               	user.banned = true
                   conn.reply(m.chat,`Kamu mendapatkan Banned`, m) 
                   } 
                   conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na3} ${hasil} dan mendapatkan + ${anj3} xpfish dan durability fishing rod mu - ${min}`,m) 
                   } 
           else if (user.hoki >= sa3) {
              let hasil = pickRandom(['cod', 'tropical', 'salmon', 'Golden', 'cod', 'cod', 'tropical', 'tropical', 'salmon', 'salmon', 'puffer', 'salmon', 'sampah', 'puffer', 'Golden', 'puffer', 'Golden', 'sampah', 'banned'])
              let sial = anj3 * 5
              let min = 1 * 3
              if (hasil === "sampah")
             {
                   mancing.sampah += na3
                   mancing.durability -= min
                   mancing.xpfish += sial
              }
              else if (hasil === "cod") {
              mancing.cod += na3
              mancing.durability -= min
              mancing.xpfish += sial
               }
               else if (hasil === "tropical") {
                mancing.tropical += na3
                mancing.durability -= min
                mancing.xpfish += sial
                }
                else if (hasil === "salmon") {
            	mancing.salmon += na3
                mancing.durability -= min
                mancing.xpfish += sial
                } else if (hasil === "Golden") {
               mancing.golden += na3
               mancing.durability -= min
               mancing.xpfish += sial
               }
              else if (hasil === "puffer") {
              mancing.puffer += na3
              mancing.durability -= min
               mancing.xpfish += sial
               } else if (hasil === "banned") {
               	user.banned = true
                   throw `Kamu Sedang Di Banned`
                   }
                   conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na3} ${hasil} dan mendapatkan + ${sial} xpfish dan durability fishing rod mu - ${min}`, m) 
                   }
                   } else if (mancing.rod == 'raihan') {
          if (user.hoki < sa) {
              let hasil = pickRandom(['cod', 'cod', 'cod', 'cod', 'cod', 'salmon', 'salmon','salmon', 'salmon','salmon', 'tropical', 'tropical','tropical','tropical','tropical', 'Golden', 'Golden', 'Golden', 'Golden', 'Golden', 'puffer', 'puffer', 'puffer', 'puffer', 'puffer'])
              let min = 1 * 1 * 1
              let anja = pickRandom(['5', '10', '15']) 
              let anjs = pickRandom(['5', '10', '15']) 
              let nas = anja * anjs
              let asa = pickRandom(['100', '200', '300', '400', '500']) 
              let sial = 100 * asa
              if (hasil === "sampah")
             {
                   mancing.sampah += nas
                   mancing.durability -= min
                   mancing.xpfish += sial
              }
              else if (hasil === "cod") {
              mancing.cod += nas
              mancing.durability -= min
              mancing.xpfish += sial
               }
               else if (hasil === "tropical") {
                mancing.tropical += nas
                mancing.durability -= min
                mancing.xpfish += sial
                }
                else if (hasil === "salmon") {
            	mancing.salmon += nas
                mancing.durability -= min
                mancing.xpfish += sial
                } else if (hasil === "Golden") {
               mancing.golden += nas
               mancing.durability -= min
               mancing.xpfish += sial
               }
              else if (hasil === "puffer") {
              mancing.puffer += nas
              mancing.durability -= min
               mancing.xpfish += sial
               }
                conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${na} ${hasil} dan mendapatkan + ${anj1} xpfish dan durability fishing rod mu - ${min}`, m) 
              } else if (user.hoki >= sa) {
              let hasil = pickRandom(['cod', 'cod', 'cod', 'cod', 'cod', 'salmon', 'salmon','salmon', 'salmon','salmon', 'tropical', 'tropical','tropical','tropical','tropical', 'Golden', 'Golden', 'Golden', 'Golden', 'Golden', 'puffer', 'puffer', 'puffer', 'puffer', 'puffer'])
              let min = 1 * 1 * 1 * 1
              let anja = pickRandom(['5', '10', '15']) 
              let anjs = pickRandom(['5', '10', '15']) 
              let nas = anja * anjs
              let asa = pickRandom(['100', '200', '300', '400', '500']) 
              let sial = 100 * asa
              if (hasil === "sampah")
             {
                   mancing.sampah += nas
                   mancing.durability -= min
                   mancing.xpfish += sial
              }
              else if (hasil === "cod") {
              mancing.cod += nas
              mancing.durability -= min
              mancing.xpfish += sial
               }
               else if (hasil === "tropical") {
                mancing.tropical += nas
                mancing.durability -= min
                mancing.xpfish += sial
                }
                else if (hasil === "salmon") {
            	mancing.salmon += nas
                mancing.durability -= min
                mancing.xpfish += sial
                } else if (hasil === "Golden") {
               mancing.golden += nas
               mancing.durability -= min
               mancing.xpfish += sial
               }
              else if (hasil === "puffer") {
              mancing.puffer += nas
              mancing.durability -= min
               mancing.xpfish += sial
               }
               conn.reply(m.chat, `Berhasil Memancing Kamu mendapatkan 🎣 ${nas} ${hasil} dan mendapatkan + ${sial} xpfish dan durability fishing rod mu - ${min}`, m) 
               }
               }}
      }}
      

handler.help = ['fish']
handler.tags = ['main']
handler.command = /^f(ish)$/
handler.premium = false

module.exports = handler

