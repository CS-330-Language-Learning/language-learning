const renderTopics = topics => {
	const topicSelection = document.getElementById('selection')

	let counter = 1
	for (const topic of topics) {
		const topicSection = document.createElement('section')
		topicSection.id = `topic${counter}`
		counter += 1
		topicSection.className = 'topic-card'
		topicSection.innerHTML = topic
		topicSection.addEventListener('click', () => {
			if (topicSection.classList.contains('selected')) {
				topicSection.classList.remove('selected')
			} else {
				topicSection.classList.add('selected')
			}
		})
		topicSelection.appendChild(topicSection)
	}
}

const topics = [
	'2020 Elections',
	'March Madness',
	'Coronavirus',
	'The Oscars',
	'Spring Break',
	'2020 Olympics',
	'Marvel',
	'The NFL',
]

window.addEventListener("load", () => {
	renderTopics(topics)
});

document.querySelector('#search-input').onkeyup = (ev) => {
	// Number 13 is the "Enter" key on the keyboard
	if (ev.keyCode === 13) {
			ev.preventDefault();
			const term = document.querySelector('#search-input').value;
			console.log(term)
	}
};