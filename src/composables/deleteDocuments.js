import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { getCollection } from '@/composables/getCollection'

const deleteDocuments = async (n) => {
	const { err, documents } = getCollection('PriorityQueue')
	const colRef = await projectFirestore.collection('PriorityQueue')
	for (let i = 0; i < n && i < docs.value.length; i++) {
		const docRef = colRef.doc(docs[i].id)
		docRef
			.delete()
			.then(() => {
				console.log(docRef + ' deleted')
			})
			.catch((e) => {
				console.log(e.message)
			})
	}
	console.log('finished deleting')
}

const deletePr = async (id, doc, difficulty, uid) => {
	if (
		doc.id == id &&
		confirm(
			'Are you sure you want to delete ? \nThis action can not be undone.'
		)
	) {
		const colRef = await projectFirestore.collection('dashboard-2024')
		const docRef = colRef.doc(doc.id)
		docRef
			.delete()
			.then(() => {})
			.catch((e) => {
				document.querySelector('.toaster .card').style.backgroundColor =
					'#dc3545db'
				document.querySelector('.toaster .card-title').innerHTML = 'Error !'
				document.querySelector('.toaster .card-text').innerHTML = e.message
			})

		var current_score = 0
		var new_score = 0
		var current_prs = 0
		var new_prs = 0

		await projectFirestore
			.collection('userStats-2024')
			.doc(uid)
			.get()
			.then((snapshot) => {
				current_score = snapshot.data().score
				current_prs = snapshot.data().numberOfPRs
				new_score = current_score - difficulty
				new_prs = current_prs - 1
			})
			.catch((e) => {
				document.querySelector('.toaster .card').style.backgroundColor =
					'#dc3545db'
				document.querySelector('.toaster .card-text').innerHTML = e.message
				document.querySelector('.toaster .card-title').innerHTML = 'Error !'
			})

		await projectFirestore
			.collection('userStats-2024')
			.doc(uid)
			.update({ score: new_score, numberOfPRs: new_prs })

		function show_toast() {
			document.querySelector('.toaster').style.display = 'flex'
		}

		function fade(element) {
			if (element != undefined) {
				var op = 1
				var timer = setInterval(function () {
					if (op <= 0.1) {
						clearInterval(timer)
						element.style.display = 'none'
					}
					element.style.opacity = op
					element.style.filter = 'alpha(opacity=' + op * 100 + ')'
					op -= op * 0.1
				}, 50)
			}
		}

		show_toast()

		setTimeout(() => {
			fade(document.querySelector('.toaster'))
		}, 3000)
	}
}

export { deleteDocuments, deletePr }
