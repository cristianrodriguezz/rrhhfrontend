import PropTypes from 'prop-types';
import { useFecthLocations } from '../../hooks/useFetch';

const SelectLocation = ({ formik }) => {
  
  const { locations } = useFecthLocations()

  return (
    <>

    <label htmlFor="location_id">
      Seleccionar su localidad
      <select
        id="location_id"
        name="location_id"
        onChange={(e) => {
          formik.setFieldValue('location_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.location_id}
      >
        <option hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {locations?.map(({ location_id, name }) => (
          <option key={location_id} value={parseInt(location_id)}>
            {name}
          </option>
        ))}
      </select>

    </label>
      {
        formik.touched.location_id && formik.errors.location_id 
        ? 
        <div className='text-red-500'>{formik.errors.location_id}</div>
        : 
        null
      }
    </>
  )
}

SelectLocation.propTypes = {
  formik: PropTypes.object, 
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      location_id: PropTypes.number,
      name: PropTypes.string
    })
  ),
}

export default SelectLocation;
