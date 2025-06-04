<template>
	<div class="projects">
		<h1>PROJECTS</h1>
		<div class="project-container">
			<ProjectsCard
				v-for="item in items"
				:key="item.id"
				:projectName="item.projectName"
				:name="item.name"
				:link="item.link"
				:techStack="item.techStack"
				:description="item.description"
			/>
		</div>
	</div>
</template>

<script>
import ProjectsCard from '@/components/ProjectsCard.vue'
import Nav from '@/components/Nav'

export default {
	components: {
		ProjectsCard,
	},
	data() {
		return {
			items: [
				{
					id: 1,
					projectName: 'YDO',
					maintainerName: 'Om Thorat, Tanmay Deobhankar',
					link: 'https://github.com/bsoc-bitbyte/YDO',
					techStack: 'Javascript, CSS, React, Python, Flask, Supabase',
					description:
						'A simple, exclusive and private matchmaking platform where mutual choices reveal a perfect match.',
				},
				{
					id: 2,
					projectName: 'Exam-Bud',
					maintainerName: 'Ritankar Saha, Harshil Khandelwal',
					link: 'https://github.com/bsoc-bitbyte/Exam-Bud',
					techStack: 'React, TailWind CSS, Node js, PostgreSQL, Express js',
					description:
						'A student-friendly platform to view and upload Notes, Lab Materials, and other Academic resources with discussion forum.',
				},
				{
					id: 3,
					projectName: 'BSoC Website',
					maintainerName: 'Rohan Sen, Abhijeet',
					link: 'https://github.com/bsoc-bitbyte/BSoC-Website',
					techStack: 'Vue, Firebase, CSS',
					description:
						'A website for BSoC to showcase all the projects and events that are being conducted under BSoC.',
				},
				{
					id: 4,
					projectName: 'GetIt',
					maintainerName: 'Vaibhav Sahu, Yash Patil',
					link: 'https://github.com/bsoc-bitbyte/GetIt',
					techStack: 'Vue, Nuxt, Pinia, Django REST Framework, Python',
					description:
						'A single Platform where merchandise of every club of college and events tickets can be found and will be made available for everyone to buy.',
				},
				{
					id: 5,
					projectName: 'Nudj',
					maintainerName: 'Ayush Saksena, Hemang Mishra',
					link: 'https://github.com/bsoc-bitbyte/Nudj',
					techStack: 'Kotlin, Jetpack Compose, Firebase',
					description:
						'Nudj provides seamless connection between hosts and students for live events, instant RSVP and easy tickets!',
				},
				{
					id: 6,
					projectName: 'DigiGate',
					maintainerName: 'Sujal Agrawal, Harsh Singh',
					link: 'https://github.com/bsoc-bitbyte/DigiGate',
					techStack: 'Kotlin, Jetpack-Compose, Firebase',
					description:
						'This project aims to enhance gate entry and exit management for better security and entry management, with automatic record creation with timestamp and location.',
				},
				{
					id: 7,
					projectName: 'Summer of ML',
					maintainerName: 'Prince Deepak Siddharth, Vishal Painjane',
					link: 'https://github.com/bsoc-bitbyte/Summer-of-ML',
					techStack:
						'Python, Tensorflow, Seaborn, Matplotlib, Pandas, Numpy, PyTorch',
					description:
						'Machine Learning made simple. Going right from the traditional Linear Regression to building Neural Networks, including all the nitty gritty optimizations, regularizations and loss functions.',
				},
				{
					id: 8,
					projectName: 'Assassins Greed',
					maintainerName: 'Divyanshu Singh, Kumar Sshalabh, Aadarsh Nayak',
					link: 'https://github.com/bsoc-bitbyte',
					techStack: 'Unity Engine, C#',
					description:
						'A 2D stealth platformer game, where players control a ninja assassin sneaking through patrols, climbing walls, and executing silent takedowns.',
				},
			],
		}
	},
}
</script>

<style scoped>
.projects {
	width: 100vw;
	background-color: var(--primary_bg_col);
	height: 100%;
	padding: 6vh;
	text-align: center;
}

.project-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.projects h1 {
	font-size: 4vw;
	color: var(--secondary_bg_col);
	font-family: var(--primary-font), sans-serif;
	margin-top: 7vh;
}
@media (max-width: 768px) {
	.projects h1 {
		font-size: 8vw;
	}
}
</style>
