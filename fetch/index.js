let page = 1
let seed = ''
let results = 10
let url = (page, results) => `https://randomuser.me/api/?page=${page}&results=${results}`

const renderUser = ({ picture, name, email, cell, gender, }) => {
	document.body.innerHTML += `
		<div>
			<img src="${picture.large}" alt="${name.first}">
			<main>
				<h1>${name.title}. ${name.first} ${name.last}</h1>
				<h1>${email}</h1>
				<h1>${cell}</h1>
				<h1>${gender}</h1>
			</main>
		</div>
	`
}

const loadUsers = (url) => {
	fetch(url)
		.then(res => res.json())
		.then(({ results, info }) => {
			if (info.seed && !url.includes('&seed='))
				url += `&seed=${info.seed}`
			if (document.body.childElementCount < 10)
				document.body.innerHTML = ''
			results.forEach(renderUser)
		})
		.catch(err => {
			console.log(err)
		})
}

window.addEventListener('scroll', () => {
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        page++
		loadUsers(url(page, results))
		setTimeout(() => {}, 500)
    }
})

loadUsers(url(page, results))