export const initialValues = {
  first_name: '',
  last_name: '',
  age: undefined,
  phone_number: undefined,
  has_own_transport: false,
  has_work_experience: false,
  current_position_id: undefined,
  education_id: undefined,
  availability_id: undefined,
  location_id: undefined,
  cv: undefined
};

export const handleSubmit = async (values, user_id, { setSubmitting, setErrors }) => {
  console.log(values);

  const URL = import.meta.env.VITE_BACKEND_URL;

  try {
    const response = await fetch(`${URL}api/candidates?user_id=${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      console.log('Formulario enviado con éxito');
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
