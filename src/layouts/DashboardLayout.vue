<template>
	<div>
		<Nav />
		<main>
			<router-view />
		</main>
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
	name: 'DashboardLayout',
	components: {
		Nav,
	},
}
</script>

<style scoped></style>
