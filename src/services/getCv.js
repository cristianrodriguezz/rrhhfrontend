export const getCvById = async (candidate_id) => {

  const URL = import.meta.env.VITE_BACKEND_URL
  const url = `${URL}api/candidates/get-cv?candidate_id=${candidate_id}`

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    console.log(error)
  }
}