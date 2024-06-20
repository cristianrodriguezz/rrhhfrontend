import PropTypes from 'prop-types';
import { useFecthLocations, useFetchData } from '../../hooks/useFetch';
import { getLocation } from '../../services/getLocation';


// eslint-disable-next-line react/prop-types
const SelectLocation = ({ formik, province }) => {
  
  const { locations: locationMendoza } = useFecthLocations()
  const { data: locationsSanLuis } = useFetchData(getLocation,74)

  console.log(locationsSanLuis?.municipios);


  return (
    <>
    {
      province === 'Mendoza' &&

    <label htmlFor="location_id" className={`text-slate-900 font-medium flex gap-1 items-center justify-center  ${(formik.touched.location_id && formik.errors.location_id )  && 'border-2 border-error rounded-xl'}`}>
      Localidad
      <select
        id="location_id"
        name="location_id"
        onChange={(e) => {
          formik.setFieldValue('location_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.location_id}
        className={`bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent `}
      >
        <option hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {locationsSanLuis?.municipios?.map(({ id, nombre }) => (
          <option key={id} className='text-black' value={parseInt(id)}>
            {nombre}
          </option>
        ))}
      </select>
    </label>
    }
    {
    province === 'San Luis' &&
    <label htmlFor="location_id" className={`text-slate-900 font-medium flex gap-1 items-center justify-center  ${(formik.touched.location_id && formik.errors.location_id )  && 'border-2 border-error rounded-xl'}`}>
      Localidad
      <select
        id="location_id"
        name="location_id"
        onChange={(e) => {
          formik.setFieldValue('location_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.location_id}
        className={`bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent `}
      >
        <option hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {locationMendoza?.map(({ location_id, name }) => (
          <option key={location_id} className='text-black' value={parseInt(location_id)}>
            {name}
          </option>
        ))}
      </select>

    </label>
    }
    {
      formik.touched.location_id && formik.errors.location_id 
      ? 
      <div className='text-error'>*{formik.errors.location_id}</div>
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
