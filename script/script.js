async function getJoke() {
	const resultWrapper = document.getElementById('result');
	const URL = 'https://api.api-ninjas.com/v1/jokes?limit=1';
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-Api-Key': 'J7fwaogtARs0R7m2g9QQiA==vRoXjoOohS1cH3It',
	});

	const emojiList =
		'😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 🥺 😢 😭 😮‍💨 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😶‍🌫️ 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 😵‍💫 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾';
	try {
		const response = await fetch(URL, { headers: headers });
		if (!response.ok) {
			throw new Error('Failed to fetch joke');
		}
		const emoji = emojiList.split(' ');

		let start = 1; // Start of the range
		let end = emoji.length; // End of the range

		const selectedEmoji = emoji[Math.floor(Math.random() * (end - start + 1)) + start];
		const data = await response.json();

		resultWrapper.textContent = `${selectedEmoji} ${data[0].joke} ${selectedEmoji}`; // Update the content of resultWrapper with the fetched joke
	} catch (error) {
		console.log(error);
	}
}
