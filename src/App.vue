<template>
	<PreLoader v-if="!spin" />
	<ToastComponent :title="''" :message="''" />
	<router-view v-if="spin" />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

@font-face {
	font-family: 'Stargaze';
	src: url('./assets/fonts/StargazeStencil.otf');
}
</style>
<script>
import PreLoader from '@/components/PreLoader'
import ToastComponent from './components/ToastComponent.vue'
import { ref } from 'vue'

export default {
	components: { PreLoader, ToastComponent },
	setup() {
		const spin = ref(false)
		setTimeout(() => (spin.value = true), 3000)
		return { spin }
	},
}
</script>
