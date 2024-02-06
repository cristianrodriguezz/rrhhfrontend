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
import { handleSubmit, initialValues } from '../utils/formCandidateConfig';
import Cuil from './componentsCandidateForm/Cuil';
import Email from './componentsCandidateForm/Email';


const CandidateForm = ({ user_id }) => {

  const formik = useFormik({
    initialValues,
    validationSchema: candidateSchema,
    onSubmit: (values, formikBag) => handleSubmit(values, user_id, formikBag),
  })

  // Esto lo hacemos para validar que han puesto un curriculum
  const handleFileUpload = (uploadedFile) => {
    console.log(uploadedFile.type.endsWith('jpeg'));
    if (uploadedFile && (uploadedFile.type === "application/pdf" || uploadedFile.type.endsWith('jpeg') || uploadedFile.type.endsWith('docx'))) {
      formik.setFieldValue("cv", uploadedFile.name);
    } 
  }

  return (
    <form onSubmit={formik.handleSubmit} className='max-w-md m-1 text-slate-900'>
      <h1 className='text-center font-bold text-3xl my-3'>Recursos Humanos</h1>
      <div className='flex gap-2 '>
        <Name formik={formik}/>
        <LastName formik={formik}/>
      </div>
      <div className='flex gap-2 mb-2'>
        <Age formik={formik}/>
        <Cuil formik={formik}/>
        <PhoneNumber formik={formik}/>
      </div>
      <div className='flex flex-col gap-2 mb-2'>
        <HasOwnTransport formik={formik}/>
        <HasOwnExperience formik={formik}/>
      </div>
      <div className='flex flex-col gap-2'>
        <SelectCurrentPosition formik={formik}/>
        <SelectEducation formik={formik}/>
        <SelectAvailability formik={formik}/>
        <SelectLocation formik={formik}/>
        <Email formik={formik}/>
      </div>
      <DragAndDropCv onFileUpload={handleFileUpload} formik={formik}/>
      <ButtonSubmitCandidate formik={formik}/>
      
    </form>
  )
}

CandidateForm.propTypes = {
  user_id: PropTypes.number.isRequired
}

export default CandidateForm;
