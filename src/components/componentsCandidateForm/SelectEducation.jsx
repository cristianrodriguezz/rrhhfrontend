import PropTypes from 'prop-types';
import { useFetchEducation } from '../../hooks/useFetch';

const SelectEducation = ({ formik } ) => {

  const { educations } = useFetchEducation()

  return (
    <>
      <label htmlFor="education_id" className='text-slate-900 font-medium flex gap-1 items-center justify-center'>
      Educación
      <select
        id="education_id"
        name="education_id"
        onChange={(e) => {
        formik.setFieldValue('education_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.education_id}
        className='bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent'
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {educations?.map(({ education_id, education }) => (
          <option key={education_id} className='text-black' value={parseInt(education_id)}>
            {education}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.education_id && formik.errors.education_id 
        ? 
        <div className='text-error'>*{formik.errors.education_id}</div>
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