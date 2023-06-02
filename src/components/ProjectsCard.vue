<template>
    <!-- <div class="card">
        <div class="projectName">{{projectName}}</div>
        <div class="card-name">
            {{name}}
        </div>
        <div class="github"><a href={{link}}>Github Link</a></div>
        <div class="techStack">Tech Stack: <span>{{techStack}}</span></div>
        <div class="projectDetail">{{description}}</div>
    </div> -->
    <div class="card-container">
        <div class="card">
            <div class="box">
                {{ console.log(link) }}
                <div class="content">
                    <h2>{{ projectName }}</h2>
                    <h3>{{ projectName }}</h3>
                    <p>{{ description }}</p>
                    <a :href='link'>Explore</a>
                </div>
            </div>
        </div>
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
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"); */

.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px 0;
}

.card-container .card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
    transition: 0.5s;
}

.card-container .card:nth-child(1) .box .content a {
    background: #cfbe06;
    color: #fff;
}

.card-container .card:nth-child(2) .box .content a {
    background: #e91e63;
}

.card-container .card:nth-child(3) .box .content a {
    background: #23c186;
}
.content{
    display: flex;
    height: 315px;
    flex-direction: column;
    justify-content: center;
    
}

.card-container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #2a2b2f;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
}

.card-container .card .box:hover {
    transform: translateY(-50px);
}

.card-container .card .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
}

.card-container .card .box .content {
    padding: 20px;
    text-align: center;
}

.card-container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
}

.card-container .card .box .content h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
}

.card-container .card .box .content p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
}

.card-container .card .box .content a {
    /* position: relative; */
    display: inline-block;
    align-self: start;
    margin-top: auto;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-left: 4.2em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}
a {
    
}

.card-container .card .box .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
}
</style>