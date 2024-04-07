const api = "https://compis.onrender.com/api/upload/video"
export const allVideos = async() => {
    const response = await fetch(api)
    const data = response.json()
    return data
}
export const findVideo = async(id) => {
    const response = await fetch(`${api}/${id}`)
    const data = response.json()
    return data
}
export const createVideo = async (Video) => {
    const response = await fetch(`${api}/upload`,{
        method: "POST",
        body: JSON.stringify(Video),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataResponse = await response.json()
      return dataResponse
}
export const editVideo = async (id,note) => {
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
export const deleteVideo = async (id) => {
    const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
    })
    const data = response.json()
    return data
}