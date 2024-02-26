

export const deleteCandidate = async (user_id, candidate_id) => {


  
    const URL = import.meta.env.VITE_BACKEND_URL;
    const url = `${URL}api/candidates/delete?user_id=${user_id}&candidate_id=${parseInt(candidate_id)}`;

    let data;
    try {
      const response = await fetch(url, {
        method: 'POST'
      })

      data = await response.json()

      const candidateElement = document.getElementById(`candidate-${candidate_id}`)
      candidateElement.classList.add('animate-delete')

      candidateElement.addEventListener('transitionend', () => {
        candidateElement.remove()
        console.log("no olvidar descomentar para eliminar desde el backend");
      })


    } catch (error) {
      console.log(error)
    }
    return data
  
}
