const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('서버규칙')
		.setDescription('ServerRule'),
	async execute(interaction) {
		await interaction.reply('놀이터 서버의 기본적인 규칙입니다\n이서버에서 욕설 및 수치심을 주는 행위 및 언행은 규칙 위반에 해당하며\n위반할 때 마다 경고는 +1만큼 누적됩니다\n만약 불합리한 판정으로 처벌 받을 경우 서버에서 상의하지 마시고\n서버운영자 혹은 서버메니저한테 개인 메시지를 주시면 됩니다\n만약 서버에서 상의하실경우 경고는 +3만큼 누적됩니다\n만약 경고가 5회 이상일 경우 자동 강제퇴장 조치가 들어갈 수 있는점 고려해 주시기 바랍니다');
	},
};