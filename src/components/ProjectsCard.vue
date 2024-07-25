<template>
	<div class="card-container">
		<div class="card" @mouseover="hover = true" @mouseleave="hover = false">
			<div class="box" :class="{ hovered: hover }">
				<div class="content">
					<div v-if="!hover">
						<div class="header">
							<p class="outerh2">{{ projectName }}</p>
						</div>
						<p class="outerp">Maintained by<br />{{ name }}</p>
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
						<a :href="link" target="_blank" :class="{ disabled: !hover }">{{
							'Explore'
						}}</a>
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
.card .content a.disabled {
	pointer-events: none;
}

.card .content {
	position: absolute;
	top: 50%;
	left: 50%;
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
	padding: 0.4vw 1.8vw 0.6vw 1.8vw;
	border-radius: 45px;
	transition: background-color 0.3s;
	font-family: var(--primary-font), sans-serif;
	position: absolute;
	font-size: 180%;
	right: 1px;
	bottom: 5px;
}

.card .content a:hover {
	background-color: var(--minor_col);
}

.outerh2 {
	font-family: var(--primary-font), sans-serif;
	font-size: 320%;
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
	padding: 0.3vw 0.1vw 0.3vw 0.3vw;
	width: 100%;
	height: 13.5vh;
	overflow-y: auto;
}

.innerp {
	font-size: 110%;
	padding: 6px;
}

.outerp {
	position: absolute;
	bottom: 10px;

	font-size: 120%;
}

.innerh3 {
	margin-top: 5px;
	font-size: 100%;
}

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.techstack {
	font-size: 110%;
	color: var(--font_col);
}
@media (max-width: 1280px) {
	.outerh2 {
		font-size: 250%;
	}
}

@media (max-width: 980px) {
	.card-container {
		flex-direction: column;
	}

	.card {
		width: 90vw;
	}
	.innerp {
		font-size: 105%;
	}
	.outerh2 {
		font-size: 200%;
	}
	.innerh2 {
		font-size: 6vw;
	}
	.card .content a {
		padding: 0.4vw 3.5vw 0.6vw 3.5vw;
	}
}
</style>
