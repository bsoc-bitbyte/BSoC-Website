<template>
	<Nav></Nav>
	<div v-if="started && !userPR" class="pr-outer">
		<div class="pr-container">
			<div class="table-heading">
				<div class="heading1"><span>Rank</span></div>
				<div class="heading2"><span>Name</span></div>
				<div class="heading3"><span>Score</span></div>
				<div class="heading4"><span>No of PRs</span></div>
				<div class="heading5"><span>Last Updated</span></div>
			</div>
			<div v-for="(doc, index) in formattedDocuments" :doc="doc.time">
				<div class="table-content">
					<div class="heading1 text-white">
						<span>{{ index + 1 }}</span>
					</div>
					<div class="heading1 text-white">
						<router-link
							title="Click to view PRs"
							class="menu__item"
							:to="{
								name: 'User',
								path: '/user/' + doc.uid,
								params: { uid: doc.uid },
							}"
							><span> {{ doc.displayName }} </span></router-link
						>
					</div>
					<div class="heading3 text-white">
						<span>{{ doc.score }} </span>
					</div>
					<div class="heading4 text-white">
						<span>{{ doc.numberOfPRs }} </span>
					</div>
					<div class="heading5 text-white">
						<span>{{ doc.time }} ago</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import { getAllUserStats } from '../composables/getCollection'
import { projectAuth } from '../firebase/config'
import Nav from '@/components/Nav.vue'

export default {
	name: 'Dashboard',
	components: {
		Nav,
	},

	setup() {
		const { documents } = getAllUserStats('userStats-2024')
		const started = ref(true)
		const userPR = ref(false)
		var userData = new Map()
		var userPRData = new Map()

		const formattedUserPRData = computed(() => {
			if (userPRData) {
				return userPRData
			}
		})

		const formattedDocuments = computed(() => {
			if (documents.value) {
				const userUID = projectAuth.currentUser.uid
				userData = documents.value.map((doc) => {
					let time = formatDistanceToNow(doc.time.toDate())
					return { ...doc, time: time, time_sec: doc.time }
				})
				userPRData = userData.filter((doc) => {
					return doc.uid == userUID
				})
				userData = userData.filter((doc) => {
					return doc.score > 0
				})
				return userData
			}
		})

		return { started, userPR, formattedDocuments, formattedUserPRData }
	},
}
</script>

<style scoped>
.navi {
	height: 10vh;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid rgba(4, 50, 94, 0.2);

	background: #f0f0f3;
}

.navi span {
	margin: 0 3vw;

	font-family: Poppins, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 28px;
	line-height: 48px;

	color: #04325e;
}

.inner {
	margin: 0 2vw;
}

.navi button {
	background: #3770ff;
	border-radius: 8px;
	width: fit-content;
	margin: 1vh 1vw;
	font-size: 1.2vw;
	padding: 1vh 2.5vw;
	color: #ffffff;
	display: flex;
	font-family: 'Poppins', sans-serif;
	text-align: center;
	border: none;
	outline: none;
	cursor: pointer;
}

.navi button:hover {
	transform: scale(1.03);
	background-color: #0745e2;
}

.content {
	height: 90vh;
	width: 100vw;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: #f0f0f3;
}

.joke-box {
	padding-bottom: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.joke-box button {
	background: #3770ff;
	border-radius: 8px;
	width: fit-content;
	margin: 1vh 3vw;
	font-size: 1.2vw;
	padding: 1vh 2.5vw;
	color: #ffffff;
	display: flex;
	font-family: 'Poppins', sans-serif;
	text-align: center;
	border: none;
	outline: none;
	cursor: pointer;
}

.joke-box p {
	font-family: 'Poppins', sans-serif;
	font-size: 2vh;
	line-height: 3vh;
}

.inner {
	display: flex;
	align-items: center;
}

.pr-outer {
	background: #19192a;
	min-height: 90vh;
	width: 100vw;
	display: flex;
	padding-top: 12vh;
	flex-direction: column;
}

.pr-container {
	min-height: 80vh;
	width: 80vw;
	margin: 40px auto;
	border-radius: 16px;
}

.table-heading {
	display: grid;
	background: #eaeaef;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 1.5em;
	padding: 25px 0;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 1.53vw;
	color: #04325e;
	border-bottom: 1px solid #04325e;
	text-align: center;
}

.table-content {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 1.5em;
	padding: 25px 0;
	font-weight: 400;
	font-size: 1.38vw;
	color: #04325e;
	text-align: center;
}

.menu__item {
	color: white;
	text-decoration: none;
}

.menu__item:hover {
	color: #f8af1e;
	background-color: #427bf624;
	border-radius: 4px;
}

@media (max-width: 900px) {
	.navi span {
		font-size: initial;
	}

	.navi button {
		font-size: 70%;
	}

	.joke-box button {
		font-size: initial;
	}

	.pr-container {
		margin: auto;
		width: 90%;
		text-align: center;
	}

	.table-heading {
		padding: 1rem 0;
	}

	.table-heading span {
		font-size: 0.9rem;
		text-align: center;
	}

	.heading3 {
		text-align: center;
	}

	.table-content {
		font-size: 0.8rem;
	}
}
</style>
