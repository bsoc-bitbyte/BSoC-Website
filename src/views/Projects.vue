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
					projectName: 'BSoC Website',
					name: 'Parth Singh, Ramgopal Reddy',
					link: 'https://github.com/bsoc-bitbyte/BSoC-Website',
					techStack: 'Vue, Firebase, Bootstrap',
					description:
						'A website for BSoC to showcase all the projects and events that are being conducted under BSoC.',
				},
				{
					id: 2,
					projectName: 'GetIt',
					name: 'Akash Paloju, Kushagra Gupta',
					link: 'https://github.com/bsoc-bitbyte/GetIt',
					techStack: 'Vue, Firebase, Redis, MongoDB, Python',
					description:
						'A single Platform where merchandise of every club of college can be found and will be made available for everyone to buy.',
				},
				{
					id: 3,
					projectName: 'Busify Web',
					name: 'Pratik Solanki, Rishikesh Kupalla',
					link: 'https://github.com/bsoc-bitbyte/busify',
					techStack: 'React, Typescript, MUI, SCSS, NESTJS, Postgres, REDIS',
					description:
						'A centralised bus ticket booking system that will allow the students to book tickets in advance through an online website, saving time and effort.',
				},
				{
					id: 4,
					projectName: 'Alumni Website',
					name: 'Eshaan Modi, Samaksh Agarwal ',
					link: 'https://github.com/BitByte-TPC/alumni',
					techStack: 'HTML, CSS, Javascript, Python',
					description:
						'This web application aims to facilitate the Alumni Affairs of IIITDM Jabalpur',
				},
				{
					id: 5,
					projectName: 'myLeave',
					name: 'Agrim Gupta',
					link: 'https://github.com/bsoc-bitbyte/myLeave',
					techStack: 'Kotlin, Architecture',
					description:
						'myLeave is a user-friendly application designed to streamline and simplify the process of submitting and managing leave requests within an organization',
				},
				{
					id: 6,
					projectName: 'DigiGate',
					name: 'Aarav Jain',
					link: 'https://github.com/bsoc-bitbyte/DigiGate',
					techStack: 'Kotlin, Architecture',
					description:
						'This project aims to enhance gate entry and exit management for better security and entry management, by implementing a QR-based system',
				},
				{
					id: 7,
					projectName: 'Summer Analytics',
					name: 'Joyee Biswas, Shreyans Katariya',
					link: 'https://github.com/bsoc-bitbyte/Summer_of_ML',
					techStack: 'Tensorflow, Seaborn, Matplotlib, Pandas, Numpy ',
					description:
						'Machine Learning made simple. Going right from the traditional Linear Regression to building Neural Networks, including all the nitty gritty optimizations, regularizations and loss functions.',
				},
				{
					id: 8,
					projectName: 'Dreamyard',
					name: 'Akshay Bhel, Prince Bhujetia',
					link: 'https://github.com/bsoc-bitbyte/Dreamyard',
					techStack: 'Unity Engine, C#',
					description:
						'An exhilarating 2D platform game that combines intense platforming challenges with thrilling combat encounters. where you have to fight and tackle enemies to complete the platform.',
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
