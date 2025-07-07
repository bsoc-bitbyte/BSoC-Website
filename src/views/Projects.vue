<template>
	<div class="projects">
		<h1>PROJECTS</h1>
		<div class="project-container">
			<ProjectsCard
				v-for="item in items"
				:key="item.id"
				:projectName="item.projectName"
				:maintainer1="item.maintainer1"
				:maintainer2="item.maintainer2"
				:link="item.link"
				:techStack="item.techStack"
				:description="item.description"
			/>
		</div>
	</div>
</template>

<script>
import ProjectsCard from '@/components/ProjectsCard.vue'
import Python from '@/assets/python.svg'
import Vue from '@/assets/vuejs.svg'
import Firebase from '@/assets/firebase.svg'
import Supabase from '@/assets/supabase.svg'
import React from '@/assets/react.svg'
import PostgreSQL from '@/assets/postgresql.svg'
import NodeJs from '@/assets/nodejs.svg'
import DjangoRest from '@/assets/djangorest.svg'
import Kotlin from '@/assets/kotlin.svg'
import Jetpack from '@/assets/jetpackcompose.svg'
import Pandas from '@/assets/pandas.svg'
import Numpy from '@/assets/numpy.svg'
import Unity from '@/assets/unity.svg'
import Csharp from '@/assets/csharp.svg'
import Figma from '@/assets/figma.svg'

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
					maintainer1: 'Om Thorat',
					maintainer2: 'Tanmay Deobhankar',
					link: 'https://github.com/bsoc-bitbyte/YDO',
					// techStack: 'React, Javascript, CSS, Python, Flask, Supabase',
					techStack: [React, Python, Supabase],
					description:
						'A simple, exclusive and private matchmaking website. Users choose 5 choices each; If two users choose the same, they are revealed to be a match.',
				},
				{
					id: 2,
					projectName: 'Exam-Bud',
					maintainer1: 'Ritankar Saha',
					maintainer2: 'Harshil Khandelwal',
					link: 'https://github.com/bsoc-bitbyte/Exam-Bud',
					// techStack: 'React, Tailwind, Express, PostgreSQL, NodeJS, Cloudinary',
					techStack: [React, NodeJs, PostgreSQL],
					description:
						'A central hub for PYQs, lab materials, and notes, with a discussion forum to share, upload, and download course-related content.',
				},
				{
					id: 3,
					projectName: 'BSoC Website',
					maintainer1: 'Rohan Sen',
					maintainer2: 'Abhijeet Whaghmare',
					link: 'https://github.com/bsoc-bitbyte/BSoC-Website',
					// techStack: 'HTML5, CSS, Vue.js, Firebase',
					techStack: [Vue, Firebase],
					description:
						'A website for BSoC to showcase all the projects and events that are being conducted under BSoC.',
				},
				{
					id: 4,
					projectName: 'Getit',
					maintainer1: 'Vaibhav Sahu',
					maintainer2: 'Yash Patil',
					link: 'https://github.com/bsoc-bitbyte/GetIt',
					techStack: [Vue, DjangoRest],
					// techStack: 'Vue.js, Nuxt.js, Pinia, Django REST Framework, Python',
					description:
						'A streamlined platform where students can buy and sell merchandise and event tickets within the college.',
				},
				{
					id: 5,
					projectName: 'Nudj',
					maintainer1: 'Hemang Mishra',
					maintainer2: 'Ayush Saksena',
					link: 'https://github.com/bsoc-bitbyte/Nudj',
					// techStack: 'Kotlin, Jetpack-Compose, Firebase',
					techStack: [Kotlin, Jetpack, Firebase],
					description:
						'Hosts create events and manage them via email login; users follow hosts, RSVP for tickets (free or paid), and view all events with updates, announcements, and feedback in a calendar view.',
				},
				{
					id: 6,
					projectName: 'DigiGate',
					maintainer1: 'Sujal Agrawal',
					maintainer2: 'Harsh Singh',
					link: 'https://github.com/bsoc-bitbyte/DigiGate',
					// techStack: 'Kotlin, Jetpack-Compose, Firebase',
					techStack: [Kotlin, Jetpack, Firebase],
					description:
						'This project aims to enhance gate entry and exit management for better security and entry management, by implementing a QR-based system',
				},
				{
					id: 7,
					projectName: 'Summer of ML',
					maintainer1: 'Prince Deepak Siddharth',
					maintainer2: 'Vishal Painjane',
					link: 'https://github.com/bsoc-bitbyte/Summer-of-ML',
					// techStack: 'Python, Matplotlib, Pandas, Numpy',
					techStack: [Python, Pandas, Numpy],
					description:
						'Explore Machine Learning, Data Science and Artificial Intelligence with our 6-week course. This course is designed to introduce you to the dynamic field of AI and ML.',
				},
				{
					id: 8,
					projectName: 'Assassins Greed',
					maintainer1: 'Divyanshu Singh',
					maintainer2: 'Kumar Sshalabh,Aadarsh Nayak',
					link: 'https://github.com/bsoc-bitbyte',
					// techStack: 'Unity Engine, C#',
					techStack: [Unity, Csharp],
					description:
						'A 2D stealth platformer game built from scratch using Unity. Players control a ninja assassin sneaking through patrols, climbing walls, and executing silent takedowns.',
				},
				{
					id: 9,
					projectName: 'Design',
					maintainer1: 'Piyush Shah',
					maintainer2: 'Kumar Sshalabh',
					link: 'https://github.com/bsoc-bitbyte',
					// techStack: 'Figma, Adobe Creative Suite',
					techStack: [Figma],
					description: 'lorem ipsum',
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
	gap: 50px;
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
