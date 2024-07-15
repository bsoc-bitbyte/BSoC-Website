<template>
	<div class="pr-outer">
		<div class="pr-container">
			<div class="table-heading">
				<div class="heading1"><span>Name</span></div>
				<div class="heading3"><span>Latest PR</span></div>
				<div class="heading4"><span>Difficulty</span></div>
			</div>
			<div v-for="user in userData" :key="user.time">
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
						<span>{{ user.difficulty }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import { getSingleUserStats } from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

export default {
	props: {
		uid: { type: String, required: true, default: null },
	},

	name: 'User',
	data(props) {
		return {
			userID: props.uid,
			userData: new Map(),
		}
	},

	created() {
		const documents = getSingleUserStats('dashboard-2024', this.userID)
		const difficulties = { 15: 'Easy', 30: 'Medium', 50: 'Hard' }

		documents.then((val) => {
			if (!val['error'].value) {
				this.userData = val['documents'].value.map((doc) => {
					let time = formatDistanceToNow(doc.time.toDate())
					doc['difficulty'] = difficulties[doc['difficulty']]
					return { ...doc, time: time, time_sec: doc.time }
				})
			}
		})
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
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 0px;
	padding: 25px 0;
	border-top-left-radius: 15px;
	border-top-right-radius: 15px;
	font-family: Poppins, sans-serif;
	font-weight: 600;
	font-size: 1.53vw;
	color: var(--primary_bg_col);
	border-bottom: 1px solid var(--secondary_bg_col);
	text-align: center;
}

.table-content {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-column-gap: 0px;
	padding: 25px 0;
	font-weight: 400;
	font-size: 1.38vw;
	color: var(--font_col);
	text-align: center;
}

.heading3 {
	text-align: left;
}

.heading3 a {
	text-decoration: none;
	color: var(--font_col);
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
