import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";
import getCollection from "@/composables/getCollection";

const deleteDocuments = async (n) => {
    const { err, documents } = getCollection("PriorityQueue")
    const colRef = await projectFirestore.collection("PriorityQueue")
    for(let i = 0; i < n && i < docs.value.length; i++) {
        const docRef = colRef.doc(docs[i].id)
        docRef.delete().then(() => {
            console.log(docRef + " deleted")
        }).catch((e) => {
            console.log(e.message)
        })
    }
    console.log("finished deleting")
}

export default deleteDocuments