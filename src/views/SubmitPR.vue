<template>
	<div class="content">
		<div class="inner">
			<input
				class="field"
				type="text"
				placeholder="Commit Message"
				v-model="message"
				required
				autofocus
			/>
			<input
				class="field"
				type="url"
				placeholder="Link to PR"
				v-model="link"
				required
			/>
			<select
				class="custom-select select"
				v-model="difficulty"
				id="inputGroupSelect01"
				required
			>
				<option selected>Select Difficulty</option>
				<option value="15">Easy</option>
				<option value="30">Medium</option>
				<option value="50">Difficult</option>
			</select>
			<button v-if="!loading" class="hvr-grow" @click="handleClick">
				Submit
			</button>
			<button v-else disabled class="disabled">Submitting</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'
import { projectAuth } from '@/firebase/config'
import {
	addDoc,
	updateUserStats,
	addUserStats,
} from '../composables/useCollection'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'

export default {
	name: 'SubmitPR',
	setup() {
		const message = ref('')
		const link = ref('')
		const difficulty = ref('Select Difficulty')
		const loading = ref(false)
		const displayName = projectAuth.currentUser.displayName
		const router = useRouter()

		const handleClick = async () => {
			if (difficulty.value === 'Select Difficulty') {
				alert('Please select a difficulty')
				return
			}

			if (message.value === '' || link.value === '') {
				alert('Please fill in all fields')
				return
			}
			loading.value = true

			const doc = {
				message: message.value,
				link: link.value,
				difficulty: difficulty.value,
				displayName: displayName,
				time: timestamp(),
				uid: projectAuth.currentUser.uid,
			}

			await updateUserStats('userStats-2024', doc, projectAuth.currentUser.uid)

			console.log(doc)
			await addDoc('dashboard-2024', doc)
			loading.value = false

			await router.push('/dashboard')
		}

		return { message, link, handleClick, loading, difficulty }
	},
}
</script>

<style scoped>
.content {
	height: 100vh;
	width: 100vw;

	display: flex;
	justify-content: center;
	align-items: center;

	background: #19192a;
}

.inner {
	width: 40vw;
	min-width: 550px;
	height: 42vh;

	margin: 40px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	background: #19192a;
	box-shadow: 4px 4px 40px 2px #132e72;
	border-radius: 8px;
}

.inner input,
.select {
	width: 90%;

	border: none;
	box-sizing: border-box;
	border-radius: 8px;
	outline: none;

	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 27px;

	color: #19192a;

	padding: 8px 14px;
}

.inner button {
	width: 90%;

	background: #e5e6eb;
	border: none;
	box-sizing: border-box;
	border-radius: 8px;
	outline: none;

	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	line-height: 33px;

	color: #19192a;

	cursor: pointer;
}

.hvr-grow {
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
	box-shadow: 4px 4px 40px 4px #466ed1;
}

@media (max-width: 900px) {
	.inner {
		min-width: 90%;
		width: initial;
	}
}
</style>
