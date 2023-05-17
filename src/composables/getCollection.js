import {ref, watchEffect} from "vue";
import {projectFirestore} from "@/firebase/config";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy("time")
    
    const unsub = collectionRef.onSnapshot((snap) => {
        let results = []  
        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id, time_sec: doc.time })
        })
        documents.value = results.reverse()
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = "could not fetch data"
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return {error, documents}
}

export default getCollection