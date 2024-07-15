<template>
	<div class="outer">
		<Nav />
		<main class="content">
			<router-view />
		</main>
		<Footer></Footer>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'GeneralLayout',
	components: {
		Nav,
		Footer,
	},
}
</script>

<style scoped>
.outer {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: var(--primary_bg_col);
}
.content {
	flex: 1;
}
</style>
