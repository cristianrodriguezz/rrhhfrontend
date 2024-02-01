import { useState, useEffect } from 'react'

const URL = import.meta.env.VITE_BACKEND_URL

export const useFetchCandidates = ({ user_id, limit, offset, q }) => {
  
  const URLCandidates = `${URL}api/candidates/get-candidates?user_id=${user_id}&limit=${limit}&offset=${offset}&q=${q}`
  const [candidates, setCandidates] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getCandidates = async () => {

    try {
      const response = await fetch(URLCandidates);
      const data = await response.json();
      setLoading(false)
      setTotalPages(parseInt(data.totalPages))
      setCandidates(data.data)
    } catch (error) {
      console.log('Error fetching photos:', error)
      setError('Error fetching photos:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getCandidates()
  },[user_id, limit, offset, q])

  return { candidates, totalPages, loading, error}

}

export const useFetchEducation = () => {
    
  const URLEducaction = `${URL}api/education`



  const [educations, setEducations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getEducation = async () => {

    try {
      const response = await fetch(URLEducaction);
      const {data} = await response.json();
      setLoading(false)
      setEducations(data)
    } catch (error) {
      console.error('Error fetching education:', error)
      setError('Error fetching education:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getEducation()
  },[])

  return { educations, loading, error}
  
}
export const useFetchPositions = () => {
    
  const URLEducaction = `${URL}api/positions`



  const [positions, setPositions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getPositions = async () => {

    try {
      const response = await fetch(URLEducaction);
      const {data} = await response.json();
      setLoading(false)

      setPositions(data)
    } catch (error) {
      console.error('Error fetching education:', error)
      setError('Error fetching education:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getPositions()
  },[])

  return { positions, loading, error}
  
}
export const useFecthAvailabilities = () => {
    
  const URLEducaction = `${URL}api/availability`



  const [availabilities, setAvailabilities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getAvailabilities = async () => {

    try {
      const response = await fetch(URLEducaction);
      const {data} = await response.json();
      setLoading(false)

      setAvailabilities(data)
    } catch (error) {
      console.error('Error fetching education:', error)
      setError('Error fetching education:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getAvailabilities()
  },[])

  return { availabilities, loading, error}
  
}
export const useFecthLocations = () => {
    
  const URLEducaction = `${URL}api/locations`


  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getLocations = async () => {

    try {
      const response = await fetch(URLEducaction);
      const {data} = await response.json();
      setLoading(false)

      setLocations(data)
    } catch (error) {
      console.error('Error fetching education:', error)
      setError('Error fetching education:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getLocations()
  },[])

  return { locations, loading, error}
  
}