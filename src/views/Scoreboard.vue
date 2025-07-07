<template>
	<div v-if="started && !userPR" class="pr-outer">
		<div class="pr-container">
			<div class="controls">
				<select v-model="selectedYear">
					<option value="2024">BSoC 2024</option>
					<option value="2025">BSoC 2025</option>
				</select>
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
			<div v-if="isLoading">
				<div class="loading-placeholder" v-for="n in 5" :key="n"></div>
			</div>
			<div v-for="(doc, index) in paginatedDocuments" :doc="doc.time">
				<div class="table-content">
					<div class="heading1 text-white">
						<span>
							<template v-if="(pagenum - 1) * numofitems + index === 0"
								>🥇</template
							>
							<template v-if="(pagenum - 1) * numofitems + index === 1"
								>🥈</template
							>
							<template v-if="(pagenum - 1) * numofitems + index === 2"
								>🥉</template
							>
							{{ (pagenum - 1) * numofitems + index + 1 }}
						</span>
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
		<div v-else-if="!isLoading" class="no-results">
			<h1>Coming Soon...!!</h1>
		</div>
	</div>
</template>

<script>
import { computed, ref, onMounted, watch } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import { getAllUserStats } from '../composables/getCollection'
import { projectAuth } from '../firebase/config'
import Nav from '@/components/Nav.vue'

export default {
	name: 'Scoreboard',

	setup() {
		const documents = ref([])
		const isLoading = ref(true)
		const started = ref(true)
		const userPR = ref(false)
		const numofitems = ref(10)
		const pagenum = ref(1)
		const searchQuery = ref('')
		const selectedYear = ref('2025')

		var userData = new Map()
		var userPRData = new Map()

		const fetchData = () => {
			isLoading.value = true
			const { documents: yearDocs } = getAllUserStats(
				`userStats-${selectedYear.value}`
			)
			watch(yearDocs, (newVal) => {
				documents.value = newVal
				isLoading.value = false
			})
		}

		onMounted(() => {
			fetchData()
		})

		watch(selectedYear, () => {
			fetchData()
		})

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
				isLoading.value = false
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
			isLoading,
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
			selectedYear,
			documents,
		}
	},
}
</script>

<style scoped>
.loading-placeholder {
	height: 70px;
	margin: 10px 0;
	background-color: grey;
	border-radius: 4px;
	animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}

.pr-outer {
	background: var(--primary_bg_col);
	min-height: 40vh;
	width: 100vw;
	display: flex;
	padding-top: 12vh;
	flex-direction: column;
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
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 1.5em;
	padding: 25px 0;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	font-family: system-ui, Poppins, sans-serif;
	font-weight: 600;
	font-size: 1.53vw;
	color: var(--primary_bg_col);
	border-bottom: 1px solid var(--secondary_bg_col);
	text-align: center;
}

.table-content {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-column-gap: 1.5em;
	padding: 25px 0;
	font-weight: 400;
	font-size: 1.38vw;
	color: var(--font_col);
	text-align: center;
}

.menu__item {
	color: var(--font_col);
	text-decoration: none;
}

.menu__item:hover {
	color: var(--minor_col);
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
	border: 2px var(--secondary_bg_col) solid;
	background-color: var(--primary_bg_col);
	min-width: 35px;
	padding: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	font-size: 1.1vw;
	color: var(--secondary_bg_col);
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
	border: var(--primary_bg_col);
	color: var(--primary_bg_col);
	background-color: var(--secondary_bg_col);
	font-size: 1.3vw;
}
.pagination *:hover {
	background-color: var(--secondary_bg_col);
	color: var(--primary_bg_col);
}
.no-results {
	color: var(--font_col);
	position: absolute;
	font-size: 30px;
	top: 50vh;
	width: 100%;
	text-align: center;
	font-family: system-ui, Poppins, sans-serif;
}
.controls {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	gap: 1rem;
}
.controls select {
	min-width: 150px;
	border-radius: 2vw;
	background-color: var(--secondary_bg_col);
	font-family: system-ui, Poppins, sans-serif;
	font-size: 1.3rem;
	font-weight: 500;
	color: var(--font_col);
	outline: none;
	background-repeat: no-repeat;
	background-position: 10px center;
	position: relative;
	border: 1px solid var(--secondary_bg_col);
	padding: 10px 10px 10px 10px;
}
.search-input {
	width: 50%;
	padding: 10px 10px 10px 40px;
	background-color: var(--secondary_bg_col);
	border: 1px solid var(--secondary_bg_col);
	border-radius: 10vw;
	font-family: system-ui, Poppins, sans-serif;
	font-size: 1rem;
	font-weight: 500;
	outline: none;
	color: var(--font_col);
	position: relative;
	background-image: url('../assets/search.svg');
	background-size: 24px 24px;
	background-repeat: no-repeat;
	background-position: 10px center;
	position: relative;
}
::placeholder {
	color: lightgrey;
	opacity: 0.8;
}

@media (max-width: 900px) {
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
	.no-results {
		top: 44vh;
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
	.no-results {
		top: 44vh;
	}
}
</style>
