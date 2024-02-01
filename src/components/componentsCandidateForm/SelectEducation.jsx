import PropTypes from 'prop-types';
import { useFetchEducation } from '../../hooks/useFetch';

const SelectEducation = ({ formik } ) => {

  const { educations } = useFetchEducation()

  return (
    <>
      <label htmlFor="education_id">
      Seleccionar su educación
      <select
        id="education_id"
        name="education_id"
        onChange={(e) => {
        formik.setFieldValue('education_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.education_id}
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {educations?.map(({ education_id, education }) => (
          <option key={education_id} value={parseInt(education_id)}>
            {education}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.education_id && formik.errors.education_id 
        ? 
        <div className='text-red-500'>{formik.errors.education_id}</div>
        : 
        null
      }
    </>
  )
}
SelectEducation.propTypes = {
  formik: PropTypes.object
}

export default SelectEducation