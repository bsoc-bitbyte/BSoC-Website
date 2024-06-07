<template>
	<Login v-if="toggle" @toggleAuth="toggleAuth" @login="handleLogin" />
	<Signup v-else @toggleAuth="toggleAuth" @login="handleLogin" />
</template>

<script>
import Login from '@/components/Login'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Signup from '../components/Signup'

export default {
	name: 'Auth',
	components: { Signup, Login },
	setup() {
		const toggle = ref(true)

		const toggleAuth = () => {
			toggle.value = !toggle.value
		}

		const router = useRouter()

		const handleLogin = () => {
			router.push({ name: 'Dashboard' })
		}

		return { toggle, toggleAuth, handleLogin }
	},
}
</script>

<style scoped></style>
