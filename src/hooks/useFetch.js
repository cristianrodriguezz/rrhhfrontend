import { useState, useEffect } from 'react'
import { useStoreFilterBackend } from './useStore';
import { useNavigate } from 'react-router-dom';
import getTokenLocalStorage from '../utils/getTokenLocalStorage';


const URL = import.meta.env.VITE_BACKEND_URL

export const useFetchCandidates = ({ user_id, limit, currentPage, q }) => {

  const token = getTokenLocalStorage()

  const filterWhere = [];

  const { myFilter } = useStoreFilterBackend();

  for (const key in myFilter) {
    filterWhere.push(`${key}=${myFilter[key]}`);
  }


  const filterQueryString = filterWhere.join('&');
  const URLCandidates = `${URL}api/candidates/get-candidates?user_id=${user_id}&limit=${limit}&offset=${currentPage * limit}&q=${q}&${filterQueryString}`;

  
  const [candidates, setCandidates] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getCandidates = async () => {

    try {
      const response = await fetch(URLCandidates, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json();

      setLoading(false)
      setTotalPages(parseInt(data.totalPages))
      setCandidates(data.data)
    } catch (error) {

      setError('Error fetching photos:', error)
      setLoading(true)
    }finally{
      setLoading(true)
    }
  }

  useEffect( () => {
    getCandidates()
  },[user_id, limit, currentPage, q, myFilter, ])

  return { candidates, totalPages, loading, error, setCandidates}

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
export const useFecthEnglishLevel = () => {
    
  const URLEducaction = `${URL}api/lenguage`


  const [lenguage, setLenguage] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getLocations = async () => {

    try {
      const response = await fetch(URLEducaction);
      const {data} = await response.json();
      setLoading(false)

      setLenguage(data)
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

  return { lenguage, loading, error}
  
}

export const useFetchLogin = () => {
  
  const URL = import.meta.env.VITE_BACKEND_URL
  const url = `${URL}api/auth/login`

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    const formData = new FormData(e.target)

    setLoading(true)

    try {

      const response = await fetch(url,{
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if(response.ok){
        window.localStorage.setItem('user', JSON.stringify(data.data));
      }else{
        throw new Error(data.error)
      }
      if(response.ok){
        navigate('/tabla')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
      if (error.message === 'Invalid email. Please register') {
        setError('Email inválido');
      } else if (error.message === 'Invalid Password') {
        setError('Contraseña inválida')
      } else {
        setError('Hubo un error al procesar la solicitud. Intente más tarde.');
      }
    }
    finally{
      setLoading(false)
    }

  }

  return {loading, error, handleSubmit}

}
export const useFetchUpdateCandidate =  (candidatess, setCandidatess) => {

  const URL = import.meta.env.VITE_BACKEND_URL

  const body = {
    first_name: '',
    last_name: '',
    age: '',
    phone_number: '',
    has_own_transport: '',
    has_work_experience: '',
    availability_id: '',
    location_id: '',
    current_position_id: '',
    cuil: ''
  }

  const handleChange = (e) => {

    const name = e.target.name

    if(e.target.type === 'checkbox'){
      body[name] = e.target.checked
    }
    if(e.target.type === 'select-one'){
      body[name] = parseInt(e.target.value)
    }
    if(e.target.type === 'text'){
      body[name] = e.target.value
    }
    if(e.target.type === 'date'){
      console.log("CAMBIAR DATO A TIPO DATE");
      body[name] = 10
    }


  }

  const handleSubmit = async (user_id, candidate_id) => {

    const url = `${URL}api/candidates/update?user_id=${user_id}&candidate_id=${candidate_id}`

    try {


    console.log(candidate_id);

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    console.log(body)

    const data = await response.json()
    console.log(data);

    candidatess.map(candidate => {
      const { 
        first_name,
        last_name,
        age,
        phone_number,
        has_own_transport,
        has_work_experience,
        availability_id,
        location_id,
        current_position_id,
        cuil
      } = body
      
      if (candidate.candidate_id === candidate_id) {
        // Modificar el campo deseado del candidato
        const updatedCandidate = {
          ...candidate,
          first_name: !first_name ? candidate.first_name : first_name,
          last_name: !last_name ? candidate.last_name : last_name,
          age: !age ? candidate.age : age,
          phone_number: !phone_number ? candidate.phone_number : phone_number,
          has_own_transport: !has_own_transport ? candidate.has_own_transport : has_own_transport,
          has_work_experience: !has_work_experience ? candidate.has_work_experience : has_work_experience,
          availability_id: !availability_id ? candidate.availability_id : availability_id,
          location_id: !location_id ? candidate.location_id : location_id,
          current_position_id: !current_position_id ? candidate.current_position_id : current_position_id,
          cuil: !cuil ? candidate.cuil : cuil
        }
    
        // Crear una nueva matriz de candidatos con el candidato actualizado
        const updatedCandidates = candidatess.map(c => 
          c.candidate_id === candidate_id ? updatedCandidate : c
        )
  
        // Establecer la nueva matriz de candidatos actualizados como estado
        setCandidatess(updatedCandidates);
      }
    })



    } catch (error) {
      console.log(error);
    }
  }

  
  return { handleSubmit, handleChange, body, candidatess }
}
