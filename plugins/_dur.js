let handler = m => m

handler.before = function (m) {
	let inv = global.db.data.invmenu[m.sender]
	if (inv.durability === 0) {
	inv.hancur = true
        inv.rod = ''
	return true}
<<<<<<< HEAD
	else if (inv.durability < 0 ) {
		inv.hancur = true
		return true }
=======
>>>>>>> af1925062280e64ba5708f13a58560832731a8af
	else if (inv.durability > 0) {
		inv.hancur = false
		return true}
	}
module.exports = handler
