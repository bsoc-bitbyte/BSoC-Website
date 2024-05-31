<template>
	<div class="toaster">
		<div class="card text-light mb-3">
			<div class="card-body">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text">{{ message }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: { type: String, required: true, default: null },

		message: { type: String, required: true, default: null },
	},
}
</script>

<style scoped>
.toaster {
	display: none;
	z-index: 20;
	width: 28rem;
	height: fit-content;
	position: absolute;
	top: 4rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
}

.card {
	border-radius: 0.4rem;
	line-height: 10px;
	background-color: #05af00cc;
	width: 100%;
	position: inherit;
	margin-left: inherit;
	margin-right: inherit;
	left: 0;
	right: 0;
}

.card-title {
	font-size: 1.3rem;
}

.card-body {
	border-radius: inherit;
	font-size: 1rem;
	padding: 0.7rem;
	padding-left: 1.3rem;
	font-weight: 600;
	background-color: inherit;
	width: 100%;
}
@media screen and (max-width: 480px) {
	.card-title {
		font-size: 0.9rem;
	}
	.card-body {
		font-size: 0.8rem;
	}
	.toaster {
		width: 80vw;
	}
}
</style>
