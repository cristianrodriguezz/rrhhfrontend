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

const CandidateForm = ({ user_id }) => {

  const formik = useFormik({
    initialValues,
    validationSchema: candidateSchema,
    onSubmit: (values, formikBag) => handleSubmit(values, user_id, formikBag),
  })

  // Esto lo hacemos para validar que han puesto un curriculum
  const handleFileUpload = (uploadedFile) => {
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      formik.setFieldValue("cv", uploadedFile.name);
    } 
  }

  return (
    <form onSubmit={formik.handleSubmit} className='max-w-md mx-auto  text-slate-300'>
      <Name formik={formik}/>
      <LastName formik={formik}/>
      <Age formik={formik}/>
      <Cuil formik={formik}/>
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
  )
}

CandidateForm.propTypes = {
  user_id: PropTypes.number.isRequired
}

export default CandidateForm;
