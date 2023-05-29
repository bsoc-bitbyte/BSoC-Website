<template>
    <div class="card">
        <div class="projectName">{{projectName}}</div>
        <div class="card-name">
            {{name}}
        </div>
        <div class="github"><a href={{link}}>Github Link</a></div>
        <div class="techStack">Tech Stack: <span>{{techStack}}</span></div>
        <div class="projectDetail">{{description}}</div>
    </div>
</template>

<script>
export default {
    props: {
        projectName: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        techStack: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }
}
</script>

<style scoped>
.card {
    width: 22vw;
    height: 41vh;
    padding: 27px;
    background-color: #fff;
    color: black;
    border-radius: 15px;
    margin-bottom: 3vh;
}

.projectName {
    font-size: 1.7vw;
    font-family: monospace;
}

.card-name {
    text-align: right;
    padding-right: 24px;
    font-size: 1.1vw;
}

.github a {
    text-decoration: none;
    color: black;
    font-style: italic;
    font-size: 1vw;
}

.techStack {
    font-weight: 700;
    font-size: 1vw;
}

.techStack span {
    font-weight: 400;
    word-spacing: 3px;
    font-style: italic;
}

.projectDetail {
    font-size: 0.9vw;
    background-color: #212529;
    color: white;
    border-radius: 10px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    padding: 10px 1.5vw;
    position: relative;
    left: -1.5vw;
    margin-top: 20px;
    word-spacing: 1px;
    font-family: Poppins, sans-serif;
}
</style>