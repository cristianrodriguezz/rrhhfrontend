import { useState, useEffect } from 'react'

export const useFetchCandidates = ({ user_id }) => {
  console.log(user_id);
  const URL = `http://localhost:3000/api/candidates/get-candidates?user_id=${user_id}`
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getCandidates = async () => {

    try {
      const response = await fetch(URL);
      const data = await response.json();
      setLoading(false)
      setCandidates(data)
    } catch (error) {
      console.error('Error fetching photos:', error)
      setError('Error fetching photos:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getCandidates()
  },[user_id])

  return { candidates, loading, error}

}