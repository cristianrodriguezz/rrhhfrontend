import PropTypes from 'prop-types';
import { useFecthAvailabilities } from '../../hooks/useFetch';

const SelectAvailability = ({ formik } ) => {
  const { availabilities } = useFecthAvailabilities()


  return (
    <>
      <label htmlFor="availability_id" className={`text-slate-900 font-medium flex gap-1 items-center justify-center  ${(formik.touched.availability_id && formik.errors.availability_id )  && 'border-2 border-error rounded-xl'}`}>
      Disponibilidad
      <select
        id="availability_id"
        name="availability_id"
        onChange={(e) => {
        formik.setFieldValue('availability_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.availability_id}
        className={`bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent `}
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {availabilities?.map(({ availability_id, availability_schedule }) => (
          <option key={availability_id} className='text-black' value={parseInt(availability_id)}>
            {availability_schedule}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.availability_id && formik.errors.availability_id 
        ? 
        <div className='text-error'>*{formik.errors.availability_id}</div>
        : 
        null
      }
    </>
  )
}
SelectAvailability.propTypes = {
  formik: PropTypes.object, 
}

export default SelectAvailability