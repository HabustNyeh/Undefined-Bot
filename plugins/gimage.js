let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw 'Cari apa?'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  let lists = ['entod', 'tt', 'tete', 'memek', 'kontol']
  if (text == 'memek') throw `Gambar itu tidak Boleh`
  if (text == 'hentai') throw `Gambar itu tidak Boleh`
  if (text == 'tete') throw `Gambar itu tidak Boleh`
  if (text == 'tt') throw `Gambar itu tidak Boleh`
  if (text == 'entod') throw `Gambar itu tidak Boleh`
  if (text == 'kontol') throw `Gambar itu tidak Boleh`
  if (!url) throw '404 Not Found'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 GOOGLE IMAGE 」 ──*

${text}
➸ *width*: ${width}
➸ *height*: ${height}
`.trim(), m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
