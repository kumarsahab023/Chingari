const fs = require("fs");
module.exports.config = {
	name: "#OWNER",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Candy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("vivek sahab") || 
react.includes("vivek")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐯𝐢𝐯𝐞𝐤𝐬𝐚𝐡𝐚𝐛✦\n\n☞\n\n★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦𝒗𝒊𝒗𝒆𝒌❦✦`",
				attachment: fs.createReadStream(__dirname + `/noprefix/vivek.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
