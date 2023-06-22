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

const getAllUserStats = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection);
    const populate = collectionRef.onSnapshot((snap) => {
        let results = []
        snap.docs.forEach(doc => {
            results.push({ ...doc.data(), id: doc.id, time_sec: doc.time })
        })
        results.sort((a, b) => (a.score < b.score) ? 1 : -1)
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = "error in fetching user stats"
    });

    watchEffect((onInvalidate) => {
        onInvalidate(() => populate())
    })

    return {error, documents}
}

const getSingleUserStats = async (collection, uid) => {
    const documents = ref(null);
    const error = ref(null);
  
    try {
      const collectionRef = projectFirestore.collection(collection).where("uid", "==", uid);
      const snap = await collectionRef.get();
      const results = [];
  
      snap.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id, time_sec: doc.time });
      });
  
      results.sort((a, b) => (a.score < b.score) ? 1 : -1);
      documents.value = results;
      error.value = null;
    } catch (err) {
      console.log(err.message);
      documents.value = null;
      error.value = "error in fetching user stats";
    }
  
    return { error, documents };
  };


export  {getCollection, getAllUserStats, getSingleUserStats};