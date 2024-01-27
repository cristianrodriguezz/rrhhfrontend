import PropTypes from 'prop-types';
import { useFetchPositions } from '../../hooks/useFetch';

const SelectCurrentPosition = ({ formik } ) => {

  const { positions } = useFetchPositions()


  return (
    <>
      <label htmlFor="current_position_id">
      Seleccionar su disponibilidad
      <select
        id="current_position_id"
        name="current_position_id"
        onChange={(e) => {
        formik.setFieldValue('current_position_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.current_position_id}
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {positions?.map(({ current_position_id, current_position }) => (
          <option key={current_position_id} value={parseInt(current_position_id)}>
            {current_position}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.current_position_id && formik.errors.current_position_id 
        ? 
        <div className='text-red-500'>{formik.errors.current_position_id}</div>
        : 
        null
      }
    </>
  )
}
SelectCurrentPosition.propTypes = {
  formik: PropTypes.object
}

export default SelectCurrentPosition