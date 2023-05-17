import {projectFirestore} from "@/firebase/config";

const useLoginCollection = async (id) => {
    return projectFirestore.collection("admins").get().then(t => {
        return t.docs.map(doc => doc.data())
    })
}

export default useLoginCollection