const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('위반사항')
		.setDescription('ServerCrime'),
	async execute(interaction) {
		await interaction.reply('현재 존재하는 위반사항 해당목록은\n욕설(단순욕설,패드립,섹드립),\n다른 사용자의 피해신고(피해강도는 AI가 처리함)\n서버에서 공개적으로 상의하는 경우\n등 이 있습니다\n*만약 처벌받은 경우 상의 및 합의는 서버 운영자나 서버 메니저에게 개인 메세지로 보내시면 확인 후 강도나 진정성에 따라 처벌을 면제 하겠습니다\n(AI가 인식하여 처리하기 때문에 오류가 있을 수 있는점 양해 부탁드립니다');
	},
};