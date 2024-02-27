import getUserFromLocalStorage from "./getUserLocalStorage";

export const handleClickExportExcel = (candidates_id) => {

  const user_id = getUserFromLocalStorage()
  const URL = import.meta.env.VITE_BACKEND_URL
  const url = `${URL}api/candidates/get-excel?candidateIds=${candidates_id.join(',')}&user_id=${user_id.id}`

  window.open(url)

}