let handler = m => m

handler.before = function (m) {
let user = global.db.data.users[m.sender]

if (user.expired > 1) {
if ( new Date * 1 > user.expired) {
user.premium = false
user.expired = -1
console.log(`masa premium habis`) 
conn.reply(m.chat, `Masa Premium kamu sudah habis`)
}}
}

module.exports = handler