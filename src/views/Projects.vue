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
				:maintainer3="item.maintainer3"
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
import NodeJS from '@/assets/nodejs.svg'
import GitHub from '@/assets/githublogo.svg'
import Rust from '@/assets/Rust.svg.png'
import Notion from '@/assets/Notion.svg.png'

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
					maintainer1: 'Arunit Chakraborty',
					maintainer2: 'Jnana Sampath',
					maintainer3: '',
					link: 'https://github.com/bsoc-bitbyte/YDO_26',
					// techStack: 'React, Javascript, CSS, Python, Flask, Supabase',
					techStack: [React, Python, Supabase],
					description:
						'You Deserve One (YDO) bridges the gap of unspoken campus connections by offering a completely safe, anonymous matchmaking platform for students.',
				},
				{
					id: 2,
					projectName: 'MindShift',
					maintainer1: 'Nilanjan Sikdar',
					maintainer2: 'Dharm Parmar',
					maintainer3: 'Siddharth Kamble',
					link: 'https://itch.io/jam/mindshift',
					// techStack: 'Unity Engine, C#',
					techStack: [Unity, Csharp],
					description:
						'A premium puzzle game where you manipulate perspective, shift rows and columns, and break endless cycles.',
				},
				{
					id: 3,
					projectName: 'BSoC Website',
					maintainer1: 'Rajvi Singh Rathore',
					maintainer2: 'Atharv Sonje',
					maintainer3: '',
					link: 'https://github.com/bsoc-bitbyte/BSoC-Website',
					// techStack: 'HTML5, CSS, Vue.js, Firebase',
					techStack: [Vue, Firebase],
					description:
						'A website for BSoC to showcase all the projects and events that are being conducted under BSoC.',
				},
				{
					id: 4,
					projectName: 'Open Source Game',
					maintainer1: 'Nilanjan Sikdar',
					maintainer2: 'Dharm Parmar',
					maintainer3: 'Siddharth Kamble',
					link: 'https://github.com/bsoc-bitbyte',
					// techStack: 'Unity Engine, C#',
					techStack: [Unity, Csharp],
					description:
						'Experience real open-source collaboration through game development.',
				},
				{
					id: 5,
					projectName: 'Nudj',
					maintainer1: 'Nirvan Jain',
					maintainer2: 'Shlok Sharma',
					maintainer3: '',
					link: 'https://github.com/bsoc-bitbyte/Nudj',
					// techStack: 'Kotlin, Jetpack-Compose, Firebase',
					techStack: [Kotlin, Jetpack, Firebase],
					description:
						'Hosts create events and manage them via email login; users follow hosts, RSVP for tickets (free or paid), and view all events with updates, announcements, and feedback in a calendar view.',
				},
				{
					id: 6,
					projectName: 'RUST',
					maintainer1: 'OM Barkare',
					maintainer2: 'Sreehari Rathish',
					maintainer3: '',
					link: 'https://github.com/bsoc-bitbyte/rustats',
					// techStack: 'Rust,github',
					techStack: [Rust, GitHub],
					description:
						'An open-source statistics library built in Rust. Simple to start, powerful to scale. Also learn about open source workflow.',
				},
				{
					id: 7,
					projectName: 'Summer of ML',
					maintainer1: 'Dhairya Pandya',
					maintainer2: 'Aditya Poddar',
					maintainer3: 'Kush Patel',
					link: 'https://github.com/bsoc-bitbyte/Summer-of-ML-26',
					// techStack: 'Python, Matplotlib, Pandas, Numpy',
					techStack: [Python, Pandas, Numpy],
					description:
						'Explore Machine Learning, Data Science and Artificial Intelligence with our 8-week course. This course is designed to introduce you to AI and ML.',
				},
				{
					id: 8,
					projectName: 'Splitt',
					maintainer1: 'Pratyush Yadav',
					maintainer2: 'Charan Sai',
					maintainer3: '',
					link: 'https://github.com/bsoc-bitbyte/Splitt',
					// techStack: 'React,NodeJS,PostgreSQL,TailwindCSS,Express',
					techStack: [React, PostgreSQL, NodeJS],
					description:
						'Auto ride-sharing for IIIT Jabalpur students. Split auto fares with batchmates going the same way.',
				},
				{
					id: 9,
					projectName: 'Design',
					maintainer1: 'Heramb Bhavsar',
					maintainer2: 'Srilekshmi',
					maintainer3: 'Parth Varshney',
					link: 'https://github.com/bsoc-bitbyte',
					// techStack: 'Figma, Adobe Creative Suite',
					techStack: [Figma, Notion],
					description:
						'Work like a real product design team from research and UX to branding, UI, systems and launch-ready experience',
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
