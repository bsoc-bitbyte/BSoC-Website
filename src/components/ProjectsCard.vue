<template>
	<div class="card-container">
		<div class="explore-part">
			<span>
				<a :href="link" target="_blank"> EXPLORE! </a>
			</span>
		</div>

		<div class="project-card">
			<div class="header">
				<h2>{{ projectName }}</h2>
				<div class="tech-icons">
					<img v-for="(tech, index) in techStack" :key="index" :src="tech" />
				</div>
			</div>
			<div class="description">
				<p>{{ description }}</p>
			</div>
			<div class="maintainers">
				<h3>MAINTAINERS:</h3>
				<div class="maintainer-name">
					<h4>{{ maintainer1 }}</h4>
					<h4>{{ maintainer2 }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		projectName: {
			type: String,
			required: true,
		},
		maintainer1: {
			type: String,
			required: true,
		},
		maintainer2: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		techStack: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.card-container {
	display: flex;
	height: 320px;
	width: 600px;
	align-items: stretch;
	background-color: #efefef;
	border-radius: 30px;
	border: 1.5px solid #efefef;
	transition:
		background-color 0.3s ease,
		border 0.3s ease;
	box-shadow:
		0 0 5px rgba(8, 145, 179, 0.6),
		0 0 15px rgba(8, 145, 179, 0.4),
		0 0 25px rgba(8, 145, 179, 0.2);
}
.card-container:hover {
	background-color: #0891b3;
	border: 1.5px solid #0891b3;
}
.explore-part {
	width: 80px;
	border-top-left-radius: 30px;
	border-bottom-left-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.explore-part span {
	opacity: 0;
	visibility: hidden;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	font-family: 'Pricedown';
	font-size: 60px;
	color: #ffffff;
	text-align: center;
	justify-content: center;
	transition:
		opacity 0.3s ease,
		visibility 0.3s ease;
}
.card-container:hover .explore-part span {
	opacity: 1;
	visibility: visible;
}
a {
	text-decoration: none;
	color: inherit;
}

.project-card {
	background-color: #111;
	box-sizing: border-box;
	border-radius: 30px;
	padding: 20px;
	width: 520px;
	color: #efefef;
	font-family: sans-serif;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
	transition: transform 0.3s ease;
}
.card-container:hover .project-card {
	transform: translateX(20px);
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 36px;
}
.tech-icons {
	display: flex;
	gap: 10px;
}
.tech-icons img {
	height: 30px;
	width: auto;
}

.description {
	border: 1.5px solid white;
	padding: 12px;
	margin: 16px 0;
	font-size: 18px;
	text-align: left;
	transition:
		background-color 0.3s ease,
		border 0.3s ease;
}
.card-container:hover .description {
	border-color: #0891b3;
}

.maintainers {
	font-size: 8px;
	display: flex;
}

.maintainer-name {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: 10px;
}
</style>
