var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Cek My Website : https://eiromc.xyz",
assets : {
large_image : "eiropng",
large_text : "EiroSans" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Website" , url : "https://eiromc.xyz"},{label : "Vote Link",url : "http://vote.eiromc.xyz"}]
}
})
})
client.login({ clientId : "831749909190279169" }).catch(console.error);