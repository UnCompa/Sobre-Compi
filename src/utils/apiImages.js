const api = "http://localhost:3000/api/upload/images"

export const allImgs = async() => {
    const response = await fetch(api)
    const data = response.json()
    return data
}
export const findImg = async(id) => {
    const response = await fetch(`${api}/${id}`)
    const data = response.json()
    return data
}
export const createImg = async (img) => {
    const response = await fetch(`${api}/upload`,{
        method: "POST",
        body: JSON.stringify(img),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataResponse = await response.json()
      return dataResponse
}
export const editImg = async (id,note) => {
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
export const deleteImg = async (id) => {
    const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
    })
    const data = response.json()
    return data
}