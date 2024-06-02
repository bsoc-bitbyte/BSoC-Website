<template>
    <Nav></Nav>

    <div class="pr-outer">
        <ToastComponent  :title="('PR deleted successfully !')" :message="('Your PR is successfully deleted.')"/>
        <div class="pr-container">
            <div class="table-heading">
                <div class="heading1"><span>Name</span></div>
                <div class="heading3"><span>Latest PR</span></div>
                <div class="heading4"><span>Time Added</span></div>
                <div class="heading5"><span>Delete</span></div>

            </div>
            <div v-for="user in formattedDocuments" :key="user.time">
                <div class="table-content">
                    <div class="heading1 text-white">
                        <span>{{ user.displayName }}</span>
                    </div>
                    <div class="heading3 text-white">
                        <span><a :href="user.link" target="_blank"  class="text-white">{{ user.message }}</a>
                        </span>
                    </div>
                    <div class="heading4 text-white">
                        <span>{{ user.time }}</span>
                    </div>
                    <div>       
                        <img @click="handleClick(user.id, user.difficulty, user.uid)"  :id="user.id" src="../assets/delete-icon.svg" style="&:hover{background-color: aqua; cursor: pointer;}; height: 1.5rem; width: 1.5rem;" alt="delete">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import {getCollection} from "../composables/getCollection";
import { projectAuth } from "../firebase/config";
import {projectFirestore} from "@/firebase/config";
import Nav from "@/components/Nav.vue";
import {deletePr} from "../composables/deleteDocuments"
import ToastComponent from "../components/ToastComponent.vue";

export default {
    name: "MyPR",
    components: {
    Nav,
    ToastComponent,
},


    setup() {
        const { documents } = getCollection("dashboard-2024");
        const started = ref(true);
        const userPR = ref(false);
        var userData = new Map();
        var userPRData = new Map();

        console.log("Working",documents.value)
        const formattedUserPRData = computed(() => {
            if (userPRData) {
                return userPRData
            }
        });


        const formattedDocuments = computed(() => {
            if (documents.value) {
                const userUID = projectAuth.currentUser.uid;
                userData = documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.time.toDate());
                    return { ...doc, time: time, time_sec: doc.time };
                });
                userPRData = userData.filter((doc) => {
                    return doc.uid == userUID;
                });
                return userPRData; 

            }
        });

        const handleClick = (id, difficulty, uid) => {
            userPRData.filter((doc) => {
                deletePr(id, doc, difficulty, uid)                
            });
        }
        return { handleClick, started, userPR, formattedDocuments, formattedUserPRData };
    },
};
</script>

<style scoped>
.navi {
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid rgba(4, 50, 94, 0.2);

    background: #f0f0f3;
}

.navi span {
    margin: 0 3vw;

    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 48px;

    color: #04325e;
}

.inner {
    margin: 0 2vw;
}

.navi button {
    background: #3770ff;
    border-radius: 8px;
    width: fit-content;
    margin: 1vh 1vw;
    font-size: 1.2vw;
    padding: 1vh 2.5vw;
    color: #ffffff;
    display: flex;
    font-family: "Poppins", sans-serif;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
}

.navi button:hover {
    transform: scale(1.03);
    background-color: #0745e2;
}

.content {
    height: 90vh;
    width: 100vw;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: #f0f0f3;
}

.joke-box {
    padding-bottom: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.joke-box button {
    background: #3770ff;
    border-radius: 8px;
    width: fit-content;
    margin: 1vh 3vw;
    font-size: 1.2vw;
    padding: 1vh 2.5vw;
    color: #ffffff;
    display: flex;
    font-family: "Poppins", sans-serif;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
}

.joke-box p {
    font-family: "Poppins", sans-serif;
    font-size: 2vh;
    line-height: 3vh;
}

.inner {
    display: flex;
    align-items: center;
}

.pr-outer {
    background: #19192a;
    min-height: 90vh;
    width: 100vw;
    display: flex;
    padding-top: 12vh;
    flex-direction: column;
}

.pr-container {
    min-height: 80vh;
    width: 80vw;
    margin: 40px auto;
    border-radius: 16px;
}

.table-heading {
    display: grid;
    background: #eaeaef;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    padding: 25px 0;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 1.53vw;
    color: #04325e;
    border-bottom: 1px solid #04325e;
    text-align: center;
}

.table-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0px;
    padding: 25px 0;
    font-weight: 400;
    font-size: 1.38vw;
    color: #04325e;
    text-align: center;
}

.heading3 {
    text-align: left;
}

.heading3 a {
    text-decoration: none;
    color: #04325e;
}

@media (max-width: 900px) {
    .navi span {
        font-size: initial;
    }

    .navi button {
        font-size: 70%;
    }

    .joke-box button {
        font-size: initial;
    }

    .pr-container {
        margin: auto;
        width: 90%;
        text-align: center;
    }

    .table-heading {
        padding: 1rem 0;
    }

    .table-heading span {
        font-size: 0.9rem;
        text-align: center;
    }

    .heading3 {
        text-align: center;
    }

    .table-content {
        font-size: 0.8rem;
    }
}
</style>
