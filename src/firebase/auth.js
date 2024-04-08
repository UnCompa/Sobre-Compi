import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from './config.js'

const auth = getAuth(app)

export const createUser = async (email,password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential.user
}