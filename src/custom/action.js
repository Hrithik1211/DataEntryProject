import { onValue, ref, set } from "firebase/database"
import { database } from "../Firebase"

export const setFirebaseData = (data) => {
    const key = (new Date()).getTime();
    set(ref(database,'users/'+key),{...data,key});
}

export const firebaseData = async () => {
    let data = new Promise((resolve) => {
        onValue(ref(database,'users/'),(snapshot) => {
            resolve(snapshot.val())
        })
    })
    return data.then(val => val)
}
export const getFirebaseData = async () => {
    const val = await firebaseData()
    const data = []
    Object.values(val).map((val) => {
        data.push(val)
    })
    return data;
}