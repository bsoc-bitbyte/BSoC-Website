<template>
	<Nav></Nav>
	<div v-if="started && !userPR" class="pr-outer">
		<div class="pr-container">
			<div class="searchbar">
				<input
					type="text"
					v-model="searchQuery"
					placeholder="Search name..."
					class="search-input"
				/>
			</div>
			<div class="table-heading">
				<div class="heading1"><span>Rank</span></div>
				<div class="heading2"><span>Name</span></div>
				<div class="heading3"><span>Score</span></div>
				<div class="heading4"><span>No of PRs</span></div>
				<div class="heading5"><span>Last Updated</span></div>
			</div>
			<div v-for="(doc, index) in paginatedDocuments" :doc="doc.time">
				<div class="table-content">
					<div class="heading1 text-white">
						<span>{{ (pagenum - 1) * numofitems + index + 1 }}</span>
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

		<div
			v-if="paginatedDocuments && paginatedDocuments.length != 0"
			class="pagination"
		>
			<button class="prevPage" @click="prevPage"><</button>
			<button
				v-for="(currentpage, index) in totalPages"
				:key="index"
				@click="changepage(currentpage)"
				:class="{ active: pagenum == currentpage }"
			>
				{{ currentpage }}
			</button>

			<button class="nextPage" @click="nextPage">></button>
		</div>
		<div v-else class="no-results">No results found.</div>
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
		const numofitems = ref(10)
		const pagenum = ref(1)
		const searchQuery = ref('')

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
		const changepage = (currentpage) => {
			pagenum.value = currentpage
		}
		const nextPage = () => {
			if (pagenum.value < totalPages.value) {
				pagenum.value += 1
			}
		}
		const prevPage = () => {
			if (pagenum.value > 1) {
				pagenum.value -= 1
			}
		}
		const filteredDocuments = computed(() => {
			if (formattedDocuments.value) {
				return formattedDocuments.value.filter((doc) =>
					doc.displayName
						.toLowerCase()
						.includes(searchQuery.value.toLowerCase())
				)
			}
			return []
		})

		const paginatedDocuments = computed(() => {
			if (filteredDocuments.value && filteredDocuments.value.length > 0) {
				const start = (pagenum.value - 1) * numofitems.value
				const end = pagenum.value * numofitems.value
				return filteredDocuments.value.slice(start, end)
			}
			return []
		})

		const totalPages = computed(() => {
			if (filteredDocuments.value && filteredDocuments.value.length > 0) {
				return Math.ceil(filteredDocuments.value.length / numofitems.value)
			}
			return 0
		})

		return {
			nextPage,
			prevPage,
			pagenum,
			numofitems,
			changepage,
			paginatedDocuments,
			totalPages,
			started,
			userPR,
			formattedDocuments,
			formattedUserPRData,
			searchQuery,
			filteredDocuments,
		}
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
	min-height: 100vh;
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
.pagination {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 3%;
	gap: 1.4vw;
	height: 35px;
}
.pagination * {
	box-sizing: border-box;
	border: 2px white solid;
	background-color: #ffffff00;
	min-width: 35px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 1.1vw;
	color: #ffffff;
	font-family: Poppins, sans-serif;
	border-radius: 3px;
	transition: all linear 0.26s;
}
.prevPage {
	margin-right: 2vw;
	font-size: 2vw;
}
.nextPage {
	margin-left: 2vw;
	font-size: 2vw;
}
.active {
	border: #04325e;
	color: #04325e;
	background-color: white;
	font-size: 1.3vw;
}
.pagination *:hover {
	background-color: white;
	color: #04325e;
}
.no-results {
	color: white;
	position: absolute;
	top: 60%;
	width: 100%;
	text-align: center;
	font-family: Poppins, sans-serif;
}
.searchbar {
	padding: 15px 0;
	text-align: center;
}

.search-input {
	width: 50%;
	padding: 10px 10px 10px 40px;
	background-color: white;
	border: 1px solid white;
	border-radius: 10vw;
	font-family: Poppins, sans-serif;
	font-size: 1rem;
	position: relative;
	background-image: url('../assets/searchicon.jpg');
	background-size: 20px 20px;
	background-repeat: no-repeat;
	background-position: 10px center;
	position: relative;
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
	.pagination * {
		padding: 4px;
		font-size: 1.8vw;
	}
	.nextPage,
	.prevPage {
		font-size: 3vw;
	}
}

@media (max-width: 550px) {
	.pagination * {
		font-size: 2.7vw;
		padding: 1px;
		height: 25px;
		width: 25px;
	}
	.nextPage,
	.prevPage {
		font-size: 4vw;
	}
}
</style>
