let fetch = require('node-fetch') 
let handler = async (m, { conn, args, command }) => {
await conn.send2ButtonLoc(m.chat, await(await fetch(fla + 'Rules Undefined Bot!')), `     ━[ *Rules Undefined Bot* ]━
          ➤ Dilarang spam
          ➤ Dilarang untuk menggunakan command 18+ berlebihan (ketahuan = ban) 
          ➤ Dilarang memasukkan bot Tanpa izin Owner ataupun Police
          ➤ Bot harus admin jika ingin menggunakan fitur admin! 
          ➤ enable restrict untuk mengaktifkan fitur admin
          
               ━[ *Rules Pengguna Undefined Bot* ]━
          ➤ Dilarang spam & telpon bot
          ➤ Dilarang share nomor bot
          ➤ Dilarang menggunakan bot untuk hal yang tidak berguna
          ➤ Dilarang untuk membandingkan Undefined bot dengan yang lain
          ➤ Lapor bug ke Owner dan Police jika ditemukan
          
               ━[ *Rules Admin & Group Undefined Bot* ]━
          ➤ Gunakan end group dengan otak di kepala jangan otak di dengkul
          ➤ Jangan spam invite dan kick menggunakan fitur bot
          ➤ Jika ada yang spam, bantu group close (untuk menghindari Overload) 
          ➤ Gk suka sama Undefined bot? kick aja bodoh
          
          ➤ Owner & Police bot berhak banned permanen / sementara dan leave group jika ada yang melanggar! 
          ➤ Hormat kami Staff Undefined Bot
          `, `━[ *©Undefined Bot* ]━`, 'Terima', '.terima', 'Tidak', '.tidak', m)}
         
 handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler