<template>
    <Nav></Nav>
    <div class="projects">
        <h1>PROJECTS</h1>
        <div class="project-container">
                <ProjectsCard v-for="item in items" :key=item.id :projectName=item.projectName :name=item.name
                    :link=item.link :techStack=item.techStack :description=item.description />
        </div>
    </div>
</template>

<script>
import ProjectsCard from '@/components/ProjectsCard.vue';
import Nav from "@/components/Nav";
export default {
    components: {
        ProjectsCard, Nav
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    projectName: "Let's Buy",
                    name: "Armin",
                    link: "https://github.com/bsoc-bitbyte/LetsBuy",
                    techStack: "Vue, Firebase, Redis, MongoDB, Python",
                    description: 'A single Platform where merchandise of every club of college can be found and will be made available for everyone to buy.',
                },
                {
                    id: 2,
                    projectName: "IIITians-Space",
                    name: "Varun Singh",
                    link: "",
                    techStack: "React with Typescript, Express and Postgresql",
                    description: 'A Forum website for students to better connect with seniors and super seniors',
                },
                {
                    id: 3,
                    projectName: "Resource Sharing",
                    name: "Anurag",
                    link: "https://github.com/bsoc-bitbyte/resource-sharing",
                    techStack: "React,Firebase, Tailwind ",
                    description: 'A College utility website where every necessary semester resources will be made available for all students directly from their google drive to ease their access.',
                },
                {
                    id: 4,
                    projectName: "Summer Analytics",
                    name: "Aryan Pandey",
                    link: "",
                    techStack: "Tensorflow, Seaborn, Natplotlib, Pandas, Numpy ",
                    description: 'Machine Learning made simple. Going right from the traditional Linear Regression to building Neural Networks, including all the nitty gritty optimizations, regularizations and loss functions.',
                },
                {
                    id: 5,
                    projectName: "Busify",
                    name: "Prajjwal Kapoor",
                    link: "https://github.com/bsoc-bitbyte/busify",
                    techStack: "React, Typescript, MUI, SCSS, NESTJS, Postgres, REDIS",
                    description: 'A centralised bus ticket booking system that will allow the students to book tickets in advance through an online website, saving time and effort.',
                },
                {
                    id: 6,
                    projectName: "2D Platformer",
                    name: "Raman Chaudhary",
                    link: "https://github.com/bsoc-bitbyte/2D-Platformer",
                    techStack: "Unity Engine, C#",
                    description: 'An exhilarating 2D platform game that combines intense platforming challenges with thrilling combat encounters. where you have to fight and tackle enemies to complete the platform.',
                },

            ],
        };
    },
}
</script>

<style scoped>

.projects {
    width: 100vw;
    background-color: #19192a;
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
    font-size: 3vw;
    color: #fff;
    font-family: Stargaze, sans-serif;
    margin-top: 7vh;
}

</style>