<template>
	<div class="content">
		<div>
			<h3 style="text-align: center; color: #fff; margin-bottom: 10px">
				Select The Repository
			</h3>
			<select v-model="selectedRepo" class="custom-select" @change="fetchPRs">
				<option value="" disabled>Select The Repository</option>
				<option v-for="repo in repos" :key="repo" :value="repo">
					{{ repo }}
				</option>
			</select>
		</div>
		<div class="inner">
			<h3 v-if="loading" style="color: #fff; padding: 10px; text-align: center">
				Getting the repos...
			</h3>
			<h3
				v-else-if="selectedRepo === ''"
				style="color: #fff; padding: 10px; text-align: center"
			>
				Please select a repo to get the Pull Requests
			</h3>
			<h3
				v-else-if="fetchErr"
				style="color: red; padding: 10px; text-align: center"
			>
				{{ fetchErr }}
			</h3>
			<div v-else class="pr-list">
				<h3>
					Pull Requests:
					<span
						v-if="prs.length === 0"
						style="color: yellow; padding: 10px; text-align: center"
						>No PRs found!</span
					>
				</h3>
				<ul>
					<li
						v-for="pr in prs"
						:key="pr.id"
						@click="openModal(pr)"
						class="hvr-grow"
					>
						<a :href="pr.html_url" target="_blank">{{ pr.title }}</a> by
						{{ pr.user.login }}
					</li>
				</ul>
			</div>
		</div>

		<!-- Modal -->
		<div v-if="showModal" class="modal-overlay">
			<div class="confirm-pr">
				<h3>Submit Your PR</h3>
				<p>{{ selectedPR?.title }}</p>
				<p>
					Difficulty:
					{{
						selectedDifficulty ??
						'Contact the maintainer to assign a difficulty label to the PR.'
					}}
				</p>
				<p v-if="isBsoc24 !== true" style="color: yellow">
					Not assigned the BSoC'24 Label
				</p>
				<div class="modal-actions">
					<button @click="showModal = false" class="btn btn-secondary">
						Close
					</button>
					<button
						@click="handleClick"
						class="btn btn-primary"
						:disabled="loading"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { projectFirestore, projectAuth, timestamp } from '@/firebase/config'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { addDoc, updateUserStats } from '../composables/useCollection'

export default {
	name: 'SubmitPR',
	setup() {
		const repos = [
			'bsoc-bitbyte/BSoC-Website',
			'bsoc-bitbyte/GetIt',
			'bsoc-bitbyte/Exam-Bud',
			'bsoc-bitbyte/Nudj',
			'bsoc-bitbyte/DigiGate',
			'bsoc-bitbyte/Summer_of_ML',
			'bsoc-bitbyte/YDO',
		]
		const message = ref('')
		const link = ref('')
		const difficulty = ref('Select Difficulty')
		const loading = ref(false)
		const fetchErr = ref(null)
		const prs = ref([])
		const showModal = ref(false)
		const selectedPR = ref(null)
		const selectedDifficulty = ref(null)
		const isBsoc24 = ref(false)
		const selectedRepo = ref('')
		const displayName = projectAuth.currentUser.displayName
		const router = useRouter()
		const submittedPRs = ref([])

		const difficultyOptions = {
			Easy: '15',
			Medium: '30',
			Hard: '50',
		}

		const fetchSubmittedPRs = async () => {
			try {
				const submittedPRsSnapshot = await projectFirestore
					.collection('dashboard-2025')
					.get()
				submittedPRs.value = submittedPRsSnapshot.docs.map(
					(doc) => doc.data().link
				)
			} catch (error) {
				console.log(error.message)
			}
		}

		const handleClick = async () => {
			if (
				!selectedDifficulty?.value ||
				!difficultyOptions[selectedDifficulty?.value]
			) {
				alert('Please ask the maintainer to assign a difficulty to the PR!')
				return
			}
			if (!isBsoc24.value) {
				alert("Please ask the maintainer to assign the BSoC'24 tag to the PR!")
				return
			}

			if (
				selectedPR?.value?.title === '' ||
				selectedPR?.value?.html_url === ''
			) {
				alert('Please choose a valid PR')
				return
			}

			loading.value = true

			const doc = {
				message: selectedPR.value.title,
				link: selectedPR.value.html_url,
				difficulty: difficultyOptions[selectedDifficulty.value],
				displayName: displayName,
				time: timestamp(),
				uid: projectAuth.currentUser.uid,
			}

			await updateUserStats('userStats-2025', doc, projectAuth.currentUser.uid)
			await addDoc('dashboard-2025', doc)
			loading.value = false
			await router.push('/scoreboard')
		}

		const fetchPRs = async () => {
			loading.value = true
			try {
				const response = await axios.get(
					`https://api.github.com/repos/${selectedRepo.value}/pulls?state=closed`
				)
				const allPRs = response.data.filter((pr) => pr.merged_at != null)
				prs.value = allPRs.filter(
					(pr) =>
						!submittedPRs.value.includes(pr.html_url) ||
						submittedPRs.value.filter((item) => item === pr.html_url).length <
							pr.assignees.length
				)
				console.log('Filtered PRs:', prs.value)
				fetchErr.value = null
			} catch (error) {
				if (error.response.status == 403) {
					fetchErr.value =
						'Could not fetch PRs from repo as Rate limit has exceeded! Try again in an hour or use a VPN.'
				} else {
					fetchErr.value =
						'There was an error fetching The PRs! Please try again later.'
				}
				console.error('Error fetching PRs:', error)
			} finally {
				loading.value = false
			}
		}

		const openModal = (pr) => {
			selectedPR.value = pr
			function containsName(arr, name) {
				return arr.some((item) =>
					item.name.toLowerCase().includes(name.toLowerCase())
				)
			}

			if (containsName(pr.labels, "BSoC'24")) {
				isBsoc24.value = true
				console.log('BSOC24')
			} else {
				isBsoc24.value = false
				console.log('not bsoc24')
			}
			if (containsName(pr.labels, 'easy')) {
				selectedDifficulty.value = 'Easy'
			} else if (containsName(pr.labels, 'medium')) {
				selectedDifficulty.value = 'Medium'
			} else if (containsName(pr.labels, 'hard')) {
				selectedDifficulty.value = 'Hard'
			} else {
				selectedDifficulty.value = null
			}

			showModal.value = true
		}

		onMounted(async () => {
			await fetchSubmittedPRs()
		})

		return {
			message,
			link,
			handleClick,
			loading,
			isBsoc24,
			fetchErr,
			difficulty,
			repos,
			prs,
			showModal,
			selectedPR,
			fetchPRs,
			selectedRepo,
			selectedDifficulty,
			openModal,
		}
	},
}
</script>

<style scoped>
.content {
	width: 100vw;
	min-height: 40vh;
	display: flex;
	flex-direction: column;
	padding: 100px 10px 0 10px;
	justify-content: center;
	align-items: center;
}

.inner {
	padding: 10px 0;
	width: 80%;
	min-width: 550px;
	height: auto;
	margin: 40px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--secondary_bg_col);
	box-shadow: 4px 4px 40px 2px var(--secondary_bg_col);
	border-radius: 8px;
}

.hvr-grow {
	border: 1px dotted var(--secondary_bg_col);
	transform: translateZ(0);
	box-shadow: 0 0 1px rgba(0, 0, 0, 0);
	backface-visibility: hidden;
	-moz-osx-font-smoothing: grayscale;
	transition-duration: 0.3s;
	transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
	transform: scale(1.03);
	box-shadow: 4px 4px 40px 4px var(--secondary_bg_col);
}

.pr-list {
	width: 90%;
	background: rgb(46, 44, 44);
	border-radius: 8px;
	padding: 20px;
	margin-top: 20px;
	color: var(--font_col);
}

.pr-list h3 {
	margin-bottom: 10px;
	color: var(--font_col);
}

.pr-list ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.pr-list li {
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 8px;
	transition: background 0.3s;
	cursor: pointer;
}

.pr-list li:hover {
	background: var(--primary_bg_col);
}

.pr-list a {
	color: var(--secondary_bg_col);
	text-decoration: none;
	font-weight: 500;
	transition: color 0.3s;
}

.pr-list a:hover {
	text-decoration: underline;
}

.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
}

.confirm-pr {
	width: 95%;
	max-width: 500px;
	background-color: var(--primary_bg_col);
	padding: 50px;
	border-radius: 10px;
}

.confirm-pr h3 {
	margin-bottom: 20px;
	color: var(--font_col);
}
.confirm-pr p {
	margin-bottom: 20px;
	color: var(--font_col);
}

.custom-select {
	width: 100%;
	padding: 8px 14px;
	border-radius: 8px;
	border: none;
	margin-bottom: 20px;
	font-family: Poppins, sans-serif;
	font-size: 18px;
}

.modal-actions {
	display: flex;
	justify-content: space-between;
}

.btn {
	padding: 10px 20px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	font-family: Poppins, sans-serif;
	font-size: 18px;
}

.btn-secondary {
	background: var(--font_col);
	color: var(--primary_bg_col);
}

.btn-primary {
	background: var(--secondary_bg_col);
	color: var(--font_col);
}

@media (max-width: 900px) {
	.inner {
		min-width: 90%;
		width: initial;
	}
}
</style>
