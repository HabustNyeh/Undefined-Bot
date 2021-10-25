let handler = async m => m.reply(`

*DONASI KAK*
➸ Dana : 0857-6464-1516
➸ Gopay : 0857-6464-1516
➸ Ovo : 0857-6464-1516

➸ Premium *10K/bulan*
➸ Premium: *25K permanen*
➸ Police Bot: *20K/bulan*
➸ Police Bot: *50K permanen*
➸ Owner: *35K/bulan*
➸ Owner: *100K permanen*
(Melanggar Rules Di Ban 1 hari) 

Donasi supaya bot terus update & Aktif
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
