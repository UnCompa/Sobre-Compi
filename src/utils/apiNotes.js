const api = "https://compis.onrender.com/api/notas"

export const allNotes = async() => {
    const response = await fetch(api)
    const data = response.json()
    return data
}

export const createNote = async (note) => {
    const response = await fetch(api,{
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const dataResponse = await response.json()
      return dataResponse
}
export const deleteNote = async (id) => {
    const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
    })
    const data = response.json()
    return data
}