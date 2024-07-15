<template>
	<div class="card-container">
		<div class="card" @mouseover="hover = true" @mouseleave="hover = false">
			<div class="box" :class="{ hovered: hover }">
				<div class="content">
					<div v-if="!hover">
						<div class="header">
							<p class="outerh2">{{ projectName }}</p>
						</div>
						<p class="outerp">{{ name }}</p>
						<div class="techstack">
							<h4 class="techstack">{{ techStack }}</h4>
						</div>
					</div>
					<div v-else>
						<h2 class="innerh2">{{ projectName }}</h2>

						<div class="inner-box">
							<p class="innerp">{{ description }}</p>
						</div>
						<h3 class="innerh3">Maintainers: {{ name }}</h3>
						<a :href="link" target="_blank">{{ 'Explore' }}</a>
					</div>
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
		name: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			hover: false,
		}
	},
}
</script>

<style scoped>
.card-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.card {
	position: relative;
	height: 40vh;
	width: 37vw;
	border-radius: 15px;
	margin: 15px;
	transition: 0.5s;
	overflow: hidden;
	border: 2px solid var(--secondary_bg_col);
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card .box {
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: var(--secondary_bg_col);
	border: 2px solid var(--secondary_bg_col);
	box-shadow: none;
	outline: none;
	transition:
		background-color 0.5s,
		border-color 0.5s;
}

.card .box.hovered {
	background-color: var(--primary_bg_col);
	border-color: var(--primary_bg_col);
}

.card .content {
	position: absolute;
	top: 50%;
	left: 48%;
	transform: translate(-50%, -50%);
	width: 90%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-align: left;
}

.card .content a {
	text-decoration: none;
	color: var(--primary_bg_col);
	background-color: var(--secondary_bg_col);
	padding: 0.3vw 1.7vw 0.5vw 1.7vw;
	border-radius: 25px;
	transition: background-color 0.3s;
	font-family: var(--primary-font), sans-serif;
}

.card .content a:hover {
	background-color: #333;
}

.outerh2 {
	font-family: var(--primary-font), sans-serif;
	font-size: 400%;
	color: var(--font_col);
}

.innerh2 {
	font-size: 2vw;
	color: var(--font_col);
}

.outerp,
.innerh3 {
	color: var(--font_col);
	margin-bottom: 10px;
	font-weight: bold;
}

.inner-box {
	background-color: var(--primary_bg_col);
	border: 2px solid var(--secondary_bg_col);
	color: var(--font_col);
	border-radius: 10px;
	padding: 0.3vw;
	width: 100%;
}

.innerp {
	font-size: 100%;
}

.outerp {
	position: absolute;
	bottom: 10px;

	font-size: 120%;
}

.innerh3 {
	margin-top: 10px;
	font-size: 100%;
	padding-bottom: 10px;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.techstack {
	font-size: 100%;
	color: var(--font_col);
}

@media (max-width: 768px) {
	.card-container {
		flex-direction: column;
	}

	.card {
		width: 90vw;
	}

	.outerh2,
	.innerh2 {
		font-size: 4vw;
	}
}
</style>
