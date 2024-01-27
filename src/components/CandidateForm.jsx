import { useFormik } from 'formik';
import DragAndDropCv from './DragAndDropCv';
import { candidateSchema } from '../validations/candidate';
import PropTypes from 'prop-types';
import SelectLocation from './componentsCandidateForm/SelectLocation';
import SelectAvailability from './componentsCandidateForm/SelectAvailability';
import SelectCurrentPosition from './componentsCandidateForm/SelectCurrentPosition';
import SelectEducation from './componentsCandidateForm/SelectEducation';
import ButtonSubmitCandidate from './componentsCandidateForm/ButtonSubmitCandidate';
import Name from './componentsCandidateForm/Name';
import LastName from './componentsCandidateForm/LastName';
import Age from './componentsCandidateForm/Age';
import PhoneNumber from './componentsCandidateForm/PhoneNumber';
import HasOwnTransport from './componentsCandidateForm/HasOwnTransport';
import HasOwnExperience from './componentsCandidateForm/HasOwnExperience';

const CandidateForm = ({ user_id }) => {

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: candidateSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {

      console.log(values)

      const URL = import.meta.env.VITE_BACKEND_URL

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
    },
  })

  const handleFileUpload = (uploadedFile) => {
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      // Se actualiza el estado del formulario con la información del archivo
      formik.setFieldValue("cv", uploadedFile.name);
    } 
  }

  return (
    <form onSubmit={formik.handleSubmit} className='max-w-md mx-auto  text-slate-300'>
      <Name formik={formik}/>
      <LastName formik={formik}/>
      <Age formik={formik}/>
      <PhoneNumber formik={formik}/>
      <HasOwnTransport formik={formik}/>
      <HasOwnExperience formik={formik}/>
      <SelectCurrentPosition formik={formik}/>
      <SelectEducation formik={formik}/>
      <SelectAvailability formik={formik}/>
      <SelectLocation formik={formik}/>
      <DragAndDropCv onFileUpload={handleFileUpload} formik={formik}/>
      {formik.errors.general && <div>{formik.errors.general}</div>}
      <ButtonSubmitCandidate formik={formik}/>
    </form>
  );
  
  
};

CandidateForm.propTypes = {
  user_id: PropTypes.number.isRequired
};

export default CandidateForm;
