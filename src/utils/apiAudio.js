const api = "https://compis.onrender.com/api/upload/audio"
export const allAudios = async() => {
    const response = await fetch(api)
    const data = response.json()
    return data
}
export const findAudio = async(id) => {
    const response = await fetch(`${api}/${id}`)
    const data = response.json()
    return data
}
export const createAudio = async (Audio) => {
    const response = await fetch(`${api}/upload`,{
        method: "POST",
        body: JSON.stringify(Audio),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataResponse = await response.json()
      return dataResponse
}
export const editAudio = async (id,note) => {
    const response = await fetch(`${api}/${id}`,{
        method: "PUT",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataResponse = await response.json()
      return dataResponse
}
export const deleteAudio = async (id) => {
    const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
    })
    const data = response.json()
    return data
}