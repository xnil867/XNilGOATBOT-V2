module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `

▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  █▄▀█▀▄█████░▀██░█▄░▄██░█████
███░███▄▄██░█░█░██░███░█████
█▀▄█▄▀█████░██▄░█▀░▀██░▀▀░██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

𝐇𝐞𝐥𝐥𝐨! 𝐈𝐭 𝐥𝐨𝐨𝐤'𝐬 𝐥𝐢𝐤𝐞 𝐲𝐨𝐮'𝐫𝐞 𝐧𝐨𝐭 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐰𝐢𝐭𝐡 𝐦𝐲 𝐩𝐫𝐞𝐟𝐢𝐱!, 𝐡𝐞𝐫𝐞'𝐬 𝐚 𝐠𝐮𝐢𝐝𝐞, 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 :➡

👑 𝗦𝗬𝗦𝗧𝗘𝗠 𝗣𝗥𝗘𝗙𝗜𝗫:➡【 ${global.GoatBot.config.prefix} 】
🐰 𝐁𝐎𝐗 𝐂𝐇𝐀𝐓 𝐏𝐑𝐄𝐅𝐈𝐗:➡ 【 ${global.GoatBot.config.prefix} 】

📌 𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘
𝐗-𝐍𝐢𝐥 ◉⁠‿⁠◉ ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ᴄᴀᴋᴇ
𝐗-𝐍𝐢𝐥 ◉⁠‿⁠◉ ᴡʜᴀᴛ ᴜs ᴄᴀᴘɪᴛᴀʟ 

⚙ 𝗠𝗢𝗥𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
➖ ✅ [ ${global.GoatBot.config.prefix}quiz ] 
➖ 🎰 [ ${global.GoatBot.config.prefix}slot ]
➖ 🎯 [ ${global.GoatBot.config.prefix}spin ]
➖ 🏦 [ ${global.GoatBot.config.prefix}bank ]
➖ 📝 [ ${global.GoatBot.config.prefix}bal ]

𝐎𝐰𝐧𝐞𝐫 𝐟𝐛 𝐋𝐢𝐧𝐤: ${global.GoatBot.config.OWNERLINK}`,
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/voEHfHB.gif")
 });
 }
 }
}