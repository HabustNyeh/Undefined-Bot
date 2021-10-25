
let handler = m => m

handler.before = function (m, {conn, participants, isBotAdmin, isAdmin, isSuperAdmin}) {

  let asu = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
	if (m.isGroup) {
    	if (isBotAdmin) {
            if (asu.warn == true) {
                if (user.warn == asu.maxwarn) {
                    if (user.owner == true) {
                    	user.warn = 0
     conn.reply(m.chat, `Untung kamu owner`,m) 
                    }
                  else if (user == isAdmin) {
                   	user.warn = 0
                    conn.reply(m.chat, `Untung Kamu Admin`, m)
                   }
                  else  {
                	user.warn = 0
	                conn.groupRemove(m.chat, [m.sender])
	              }
	          }
             else if (user.warn > asu.maxwarn) {
                 if (user.owner == true) {
                 	user.warn = 0
     conn.reply(m.chat, `Untung kamu owner`,m) 
                    }
                   else if (user == isAdmin) {
                   	user.warn = 0
                    conn.reply(m.chat, `Untung Kamu Admin`,m)
                   }
                  else {
                	user.warn = 0
	                conn.groupRemove(m.chat, [m.sender])
	               }
	            }
           }
        }
	}
}
module.exports = handler
