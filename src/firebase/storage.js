import {getDownloadURL, getStorage,ref, uploadBytes, deleteObject } from 'firebase/storage'
import {app} from './config.js'
export const storage = getStorage(app)

export const uploadFile = async (file,fileName) => {
    const storageRef = ref(storage, fileName)
    await uploadBytes(storageRef, file)
    const url = getDownloadURL(storageRef)
    return url
}

export const deleteFile = async (fileName) => {
    const deleteRef = ref(storage, fileName)
    deleteObject(deleteRef).then(() => {
        return "Borrado correctamente"
    }).catch((e) => {
        return e
    })
}

