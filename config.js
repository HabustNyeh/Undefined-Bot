global.you = ['nomor elu']
global.owner = ['nomor','nomor','nomor']
global.police = ['nomor']
global.mods = []
global.prems = ['6282181661561']
global.helper = ['nomor']
global.ttod = []
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  myapi: 'https://testapi.io/api/Razen', 
  xteam: 'https://api.xteam.xyz', 
  vhtear: 'https://api.vhtear.com', 
  some: 'https://some-random-api.ml', 
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz', 
  zahir: 'https://zahirr-web.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.zeks.xyz':'api', //daftar di web api.zeks.xyz
  'https://api.xteam.xyz':'api', //daftar di web api.xteam.xyz
  'https://api.vhtear.com': 'NOT-PREMIUM', //daftar di web api.vhtear.com
  'https://pencarikode.xyz': 'pais', 
  'https://zahirr-web.herokuapp.com': 'zahirgans'
}

// Sticker WM
global.packname = 'Your bot'
global.author = 'Bot'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
