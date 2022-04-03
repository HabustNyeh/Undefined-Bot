let fetch = require('node-fetch')
let util = require('util')
let eU = require('emoji-unicode')
let { MessageType } = require('@adiwajshing/baileys') 
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, args}) => {
  if(!args[0] || !args[1]){
  	conn.reply(m.chat, `Emoji harus 2, contoh /emojimix 😀 😇`, m) 
  	return false
  }
  let a = `U${eU(args[0])}`.toLowerCase() 
  let b = `U${eU(args[1])}`.toLowerCase() 
  
  async function fetchUrls(txtUrls1, txtUrls2) {
      let url = new URL(txtUrls1)
      let res = await fetch(url)
      if(!res.ok){
      	  url = new URL(txtUrls2)
          res = await fetch(url)
          if(!res.ok) return conn.reply(m.chat, `Error, Emoji not support`, m)
      }
      if(!res.status == 200) return conn.reply(m.chat, `Emoji Not Support`) 
      if(res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
        delete res
        throw `Content-Length: ${res.headers.get('content-length')}`
      }
      if (!/text|json/.test(res.headers.get('content-type'))) {
        stiker = await sticker(false, url, args[0], args[1])
        return conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
      }
      
   }
  
  let txtUrl1 = `https://www.gstatic.com/android/keyboard/emojikitchen/20201001/${a}/${a}_${b}.png`
  let txtUrl2 = `https://www.gstatic.com/android/keyboard/emojikitchen/20201001/${b}/${b}_${a}.png`
  
  let res = fetchUrls(txtUrl1, txtUrl2)
}
handler.help = ['emojimix emoji1 emoji2']
handler.tags = ['internet']
handler.command = /^emojimix$/i

module.exports = handler

