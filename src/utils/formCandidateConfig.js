import { toast } from 'react-toastify'

export const initialValues = {
  first_name: '',
  last_name: '',
  age: '',
  cuil: '',
  phone_number: '',
  has_own_transport: false,
  has_work_experience: false,
  lenguage_id: '',
  current_position_id: '',
  education_id: '',
  availability_id: '',
  location_id: '',
  cv: '',
  email:'',
};

export const handleSubmit = async (values, user_id, { setSubmitting, setErrors }, navigate) => {

  const formData = new FormData()
  formData.append('cv', values.cv[0])

  const age = new Date(values.age).toISOString()
  const phone_number = parseInt(values.phone_number)

  const valuesToSend = {
    ...values,
    age,
    phone_number
  }
  if (valuesToSend.lenguage_id === ''){
    delete valuesToSend.lenguage_id
  }

  console.log(valuesToSend);

  const URL = import.meta.env.VITE_BACKEND_URL

  try {
    const response = await fetch(`${URL}api/candidates?user_id=${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(valuesToSend),
    })

    const data = await response.json()
    console.log(data);

    const {candidate_id} = data

    console.log(candidate_id);

    await fetch(`${URL}api/candidates/upload-cv?candidate_id=${candidate_id}&user_id=${user_id}`,{
      method: 'POST',
      body: formData
    })

    if(response.status === 409) {

      toast.error('El correo electrónico ya existe', {
        position: "top-center",
        autoClose: 12000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

    }
    if(response.status === 401) {

      toast.error('El CUIL ya existe en la base de datos', {
        position: "top-center",
        autoClose: 12000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })

    }
    
    
    if (response.ok) {

      navigate('/ok')


    } else {
      const responseData = await response.json();
      console.error('Error al enviar el formulario:', responseData.error);
      setErrors({ general: 'Hubo un error en el envío del formulario.' });
    }


  } catch (error) {
    console.error('Error:', error.message);
    setErrors({ general: 'Hubo un error en el envío del formulario.' });
  } finally {
    setSubmitting(false);
  }
};
