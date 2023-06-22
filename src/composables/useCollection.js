import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import { getDoc,setDoc,doc as firebaseDoc } from "firebase/firestore"; 



const addDoc = async (collection,doc) => {
    const error = ref(null);

    try {
        await projectFirestore.collection(collection).add(doc)
    } catch (err) {
        console.log(err.message)
        error.value = "Could not send message!!"
    }
}

const addUserStats = async (collection, doc) => {
    const error = ref(null)

    try {
        await projectFirestore.collection(collection).add(doc)
    } catch (err) {
        console.log(err.message)
        error.value = "Could not add UserStats!!"
    }
}

const updateUserStats = async (collection, doc, id) => {
    try {
        const docRef = firebaseDoc(projectFirestore, collection, id);
        const existingDoc = await getDoc(docRef);
        let updatedScore = 0;
        if (!existingDoc.exists()) {
            console.log("No such document!");
            updatedScore = doc.difficulty;
            await setDoc(docRef, {
                message: doc.message,
                link: doc.link,
                score: updatedScore,
                displayName: doc.displayName,
                time: doc.time
            }, { merge: true });
            console.log("Document successfully written!","score updated",updatedScore)
            return;
        }
        const existingScore = existingDoc.data().score;
        updatedScore = parseInt(existingScore) + parseInt(doc.difficulty);

        await setDoc(docRef, {
            message: doc.message,
            link: doc.link,
            score: updatedScore,
            displayName: doc.displayName,
            time: doc.time
        }, { merge: true });

        console.log("Document successfully written!","score updated",updatedScore)
    } catch (err) {
        console.log(err.message);
    }
}


export { addDoc, addUserStats, updateUserStats }