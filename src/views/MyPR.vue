<template>
	<div class="loading-bar" v-if="loading"></div>
	<div class="pr-outer">
		<div class="pr-container">
			<div v-if="loading" class="loading-indicator">
				<h6>Fetching your PR's....</h6>
			</div>
			<div v-else>
				<div v-if="formattedDocuments.length" class="table-heading">
					<div class="heading1"><span>Name</span></div>
					<div class="heading3"><span>Latest PR</span></div>
					<div class="heading4"><span>Time Added</span></div>
					<div class="heading5"><span>Delete</span></div>
				</div>

				<div v-if="formattedDocuments.length">
					<div v-for="user in formattedDocuments" :key="user.time">
						<div class="table-content">
							<div class="heading1 text-white">
								<span>{{ user.displayName }}</span>
							</div>
							<div class="heading3 text-white">
								<span>
									<a :href="user.link" target="_blank" class="text-white">
										{{ user.message }}
									</a>
								</span>
							</div>
							<div class="heading4 text-white">
								<span>{{ user.time }}</span>
							</div>
							<div>
								<img
									@click="handleClick(user.id, user.difficulty, user.uid)"
									:id="user.id"
									src="../assets/delete-icon.svg"
									style="
										&:hover {
											background-color: aqua;
											cursor: pointer;
										}
										height: 1.5rem;
										width: 1.5rem;
									"
									alt="delete"
								/>
							</div>
						</div>
					</div>
				</div>

				<div v-else class="no-prs-text">
					<img src="../assets/noPR2.png" />
					<h1>Looks like you have no PR's!</h1>
					<h5>
						Explore the Projects section to start contributing and earn points.
					</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { formatDistanceToNow } from 'date-fns'
import { computed, ref } from 'vue'
import { deletePr } from '../composables/deleteDocuments'
import { getCollection } from '../composables/getCollection'
import { projectAuth } from '../firebase/config'

export default {
	name: 'MyPR',
	setup() {
		const { documents } = getCollection('dashboard-2024')
		const started = ref(true)
		const userPR = ref(false)
		var userData = new Map()
		var userPRData = new Map()
		const loading = ref(true)
		setTimeout(() => {
			if (documents.value) {
				loading.value = false
			}
		}, 1000)

		console.log('Working', documents.value)
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
				return userPRData
			}
		})

		const handleClick = (id, difficulty, uid) => {
			userPRData.filter((doc) => {
				deletePr(id, doc, difficulty, uid)
			})
		}
		return {
			handleClick,
			started,
			userPR,
			formattedDocuments,
			formattedUserPRData,
			loading,
		}
	},
}
</script>

<style scoped>
.pr-outer {
	background: var(--primary_bg_col);
	min-height: 40vh;
	width: 100vw;
	display: flex;
	padding-top: 12vh;
	flex-direction: column;
	justify-content: space-between;
}

.pr-container {
	min-height: 40vh;
	width: 80vw;
	margin: 40px auto;
	border-radius: 16px;
}

.table-heading {
	display: grid;
	background: var(--secondary_bg_col);
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 0px;
	padding: 25px 0;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 1.53vw;
	color: var(--primary_bg_col);
	border-bottom: 1px solid var(--primary_bg_col);
	text-align: center;
}

.table-content {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 0px;
	padding: 25px 0;
	font-weight: 400;
	font-size: 1.38vw;
	color: var(--primary_bg_col);
	text-align: center;
}

.heading3 {
	text-align: left;
}

.heading3 a {
	text-decoration: none;
	color: var(--primary_bg_col);
}
.no-prs-text {
	color: var(--font_col);
	text-align: center;
	margin-top: 2.6vh;
}
.loading-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 4px;
	background-color: var(--secondary_bg_col);
	animation: loadingAnimation 2s infinite;
}
@keyframes loadingAnimation {
	0% {
		transform: translateX(-100%);
	}
	50% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(100%);
	}
}

.loading-indicator {
	text-align: center;
	margin-top: 4vh;
	color: var(--font_col);
	padding: 2rem;
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
