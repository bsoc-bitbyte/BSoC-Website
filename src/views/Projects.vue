<template>
    <Nav></Nav>
    <div class="projects">
        <h1>PROJECTS</h1>
        <div class="projectcards">
            <ProjectsCard v-for="item in items" :key="item.id" :projectName="item.projectName" :name="item.name"
                :link="item.link" :techStack="item.techStack" :description="item.description" />
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
                    projectName: "Busify",
                    name: "Tushar",
                    link: "https://github.com/Tusharjain123",
                    techStack: "React, Vue",
                    description: 'Description for Card 1',
                },
                {
                    id: 2,
                    projectName: "Busify",
                    name: "Tushar",
                    link: "https://github.com/Tusharjain123",
                    techStack: "React, Vue",
                    description: 'Description for Card 1',
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
    height: 100vh;
    padding: 6vh;
}

.projectcards {
    margin-top: 3vh;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.projects h1 {
    font-size: 3vw;
    color: #fff;
    ;
    font-family: Stargaze, sans-serif;
    margin-top: 7vh;
}
</style>