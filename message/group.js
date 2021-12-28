const {
	MessageType,
	Presence,
	mentionedJid
} = require('@adiwajshing/baileys')
const fs = require('fs-extra')
const { getBuffer } = require('../lib/functions')
const { color, bgcolor } = require('../lib/color')

module.exports = welcome = async (nayla, anu) => {
    try {
           if (anu.action == 'add') {
           if (anu.participants[0] === nayla.user.jid){
           nayla.updatePresence(anu.jid, Presence.composing)
           const buttons = [
           {buttonId: `.menu`, buttonText: {displayText: '𝐌𝐄𝐍𝐔'}, type: 1}
           ]
           const buttonMessage = {
           contentText: `Halo! Terima Kasih Sudah Mengundangku, Jika Ingin Menggunakan Bot Ketik #menu`,
           footerText: `Hallo Semuaa 👋`,
           buttons: buttons,
           headerType: 1
           }
           await nayla.sendMessage(anu.jid, buttonMessage, MessageType.buttonsMessage)
           }}
           
           //Promote
           if (anu.action == 'promote') {
           mdata = await nayla.groupMetadata(anu.jid)
           num = anu.participants[0]
           console.log(anu)
           texs = `─ 「 *PROMOTE DETECT* 」 ─\n\n`
           texs += `⬡ *USER :* @${num.split('@')[0]}\n`
           texs += `⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}\n`
           texs += `⬡ *GRUP :* ${mdata.subject}`
           const buttons = [{buttonId: ' ', buttonText: {displayText: 'Wah pasti orang dalam'}, type: 1}]
           const buttonMessage = {
           contentText: texs,
           footerText: 'Cieee Jadi Admin 🎉',
           buttons: buttons,
           headerType: 1
           }
           await nayla.sendMessage(anu.jid, buttonMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}
           })
           //Demote
           } else if (anu.action == 'demote') {
           mdata = await nayla.groupMetadata(anu.jid)
           num = anu.participants[0]
           console.log(anu)
           texss = `─ 「 *DEMOTE DETECT* 」 ─\n\n`
           texss += `⬡ *USER :* @${num.split('@')[0]}\n`
           texss += `⬡ *NOMOR :* ${num.replace('@s.whatsapp.net', '')}\n`
           texss += `⬡ *GRUP :* ${mdata.subject}`
           const buttons = [{buttonId: ' ', buttonText: {displayText: 'Awokawok'}, type: 1}]
           const buttonMessage = {
           contentText: texss,
           footerText: 'Yang Sabar Yaaa 💪',
           buttons: buttons,
           headerType: 1
           }
           await nayla.sendMessage(anu.jid, buttonMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}})
           }
           
           //Add
           if (!JSON.parse(fs.readFileSync('./database/group/welcome.json')).includes(anu.jid)) return
           if (anu.action == 'add') {
           mdata = await nayla.groupMetadata(anu.jid)
           num = anu.participants[0]
           console.log(anu)
           try {
           var EzEz = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
           } catch {
           var EzEz = 'https://i.ibb.co/GJ96bPM/4f2695370402.jpg'
           }
           memeg = mdata.participants.length
           teks = `Hallo Kak @${num.split('@')[0]} Selamat Datang Di Grup ${mdata.subject}\n\n`
           teks += `JANGAN LUPA ISI YA\n`
           teks += `- NAMA :\n`
           teks += `- ASAL :\n`
           teks += `- KELAMIN :\n`
           teks += `- UMUR :\n\n`
           teks += `Semoga Betah Kak Hehe😇`
           buffer = await getBuffer(EzEz)
           const gambra = await nayla.prepareMessage(anu.jid, {jpegThumbnail:buffer}, MessageType.location)
           const buttonsss = [
           {buttonId: ` `, buttonText: {displayText: 'Welcome 👋'}, type: 1},
            ]
           const buttonsMessage = {
       	locationMessage: gambra.message.locationMessage,
           contentText: teks,
           buttons: buttonsss,
           footerText: `Welcome messages`,
           headerType: 6
           }
           await nayla.sendMessage(anu.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}})
           //Remove
           } else if (anu.action == 'remove') {
           mdata = await nayla.groupMetadata(anu.jid)
           num = anu.participants[0]
           console.log(anu)
           try {        
           var EzEz = await nayla.getProfilePicture(`${num.split('@')[0]}@c.us`)
           } catch {
           var EzEz = 'https://i.ibb.co/GJ96bPM/4f2695370402.jpg'
           }
           memeg = mdata.participants.length
           tekss = `Selamat Tinggal *@${num.split('@')[0]}*\nJangan Balik Lagi Yaa`
           bufer = await getBuffer(EzEz)
           const gambraa = await nayla.prepareMessage(anu.jid, {jpegThumbnail:bufer}, MessageType.location)
           const buttonss = [{buttonId: ` `, buttonText: {displayText: 'Goodbyee 👋\n\nDia temenku guys, Kita berteman udah lama, gak tau kenapa tiba2 Keluar grup 😭'}, type: 1}]
           const buttonsMessagee = {
       	locationMessage: gambraa.message.locationMessage,
           contentText: tekss,
           buttons: buttonss,
           footerText: `Leaving messages`,
           headerType: 6
           }
           await nayla.sendMessage(anu.jid, buttonsMessagee, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [num]}})
           }
            
} catch (e){
console.log(e)
}
}