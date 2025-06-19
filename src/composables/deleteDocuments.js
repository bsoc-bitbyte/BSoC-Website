import { getCollection } from '@/composables/getCollection'
import { projectFirestore } from '@/firebase/config'
import { errorToast, successToast } from './useToast'

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
				errorToast('Error !', e.message)
			})

		var current_score = 0
		var new_score = 0
		var current_prs = 0
		var new_prs = 0

		await projectFirestore
			.collection('userStats-2025')
			.doc(uid)
			.get()
			.then((snapshot) => {
				current_score = snapshot.data().score
				current_prs = snapshot.data().numberOfPRs
				new_score = current_score - difficulty
				new_prs = current_prs - 1
			})
			.catch((e) => {
				errorToast('Error !', e.message)
			})

		await projectFirestore
			.collection('userStats-2025')
			.doc(uid)
			.update({ score: new_score, numberOfPRs: new_prs })

		successToast('Success !', 'PR deleted successfully')
	}
}

export { deleteDocuments, deletePr }
