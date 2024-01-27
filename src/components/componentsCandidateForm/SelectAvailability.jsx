import PropTypes from 'prop-types';
import { useFecthAvailabilities } from '../../hooks/useFetch';

const SelectAvailability = ({ formik } ) => {
  const { availabilities } = useFecthAvailabilities()


  return (
    <>
      <label htmlFor="availability_id">
      Seleccionar su disponibilidad
      <select
        id="availability_id"
        name="availability_id"
        onChange={(e) => {
        formik.setFieldValue('availability_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.availability_id}
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {availabilities?.map(({ availability_id, availability_schedule }) => (
          <option key={availability_id} value={parseInt(availability_id)}>
            {availability_schedule}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.availability_id && formik.errors.availability_id 
        ? 
        <div className='text-red-500'>{formik.errors.availability_id}</div>
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