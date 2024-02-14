import PropTypes from 'prop-types';
import { useFetchPositions } from '../../hooks/useFetch';

const SelectCurrentPosition = ({ formik } ) => {

  const { positions } = useFetchPositions()


  return (
    <>
      <label htmlFor="current_position_id" className={`text-slate-900 font-medium flex gap-1 items-center justify-center  ${(formik.touched.current_position_id && formik.errors.current_position_id )  && 'border-2 border-error rounded-xl'}`}>
       Posición
      <select
        id="current_position_id"
        name="current_position_id"
        onChange={(e) => {
        formik.setFieldValue('current_position_id', parseInt(e.target.value, 10));
        }}
        className={`bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent `}
        onBlur={formik.handleBlur}
        value={formik.values.current_position_id}
      >
        <option  hidden defaultValue={undefined} className='text-black'>
          Seleccionar
        </option>
        {positions?.map(({ current_position_id, current_position }) => (
          <option key={current_position_id} className='text-black' value={parseInt(current_position_id)}>
            {current_position}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.current_position_id && formik.errors.current_position_id 
        ? 
        <div className='text-error'>*{formik.errors.current_position_id}</div>
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