function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fade(element) {
	if (element != undefined) {
		await sleep(800)
		element.style.opacity = '0'
		await sleep(500)
		element.style.display = 'none'
		element.style.opacity = '1'
	}
}

export function errorToast(error, message) {
	document.querySelector('.toaster').style.display = 'flex'
	document.querySelector('.toaster .card').style.backgroundColor = '#dc3545db'
	document.querySelector('.toaster .card-title').innerHTML = error
	document.querySelector('.toaster .card-text').innerHTML = message

	fade(document.querySelector('.toaster'))
}

export function successToast(title, message) {
	document.querySelector('.toaster').style.display = 'flex'
	document.querySelector('.toaster .card').style.backgroundColor = '#28a745db'
	document.querySelector('.toaster .card-title').innerHTML = title
	document.querySelector('.toaster .card-text').innerHTML = message

	fade(document.querySelector('.toaster'))
}
