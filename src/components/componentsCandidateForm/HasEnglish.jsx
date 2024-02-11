import PropTypes from 'prop-types';
import { useFecthEnglishLevel } from '../../hooks/useFetch';

const HasEnglish = ({ formik } ) => {

  const { lenguage } = useFecthEnglishLevel()


  return (
    <>
      <label htmlFor="lenguage_id" className='text-slate-900 font-medium flex gap-1 items-center justify-center'>
      Inglés
      <select
        id="lenguage_id"
        name="lenguage_id"
        onChange={(e) => {
        formik.setFieldValue('lenguage_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.lenguage_id}
        className='bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent'
      >
        <option  hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {lenguage?.map(({ lenguage_id, lenguage }) => (
          <option key={lenguage_id} className='text-black' value={parseInt(lenguage_id)}>
            {lenguage}
          </option>
        ))}
      </select>
    </label>

      {
        formik.touched.lenguage_id && formik.errors.lenguage_id 
        ? 
        <div className='text-error'>*{formik.errors.lenguage_id}</div>
        : 
        null
      }
    </>
  )
}
HasEnglish.propTypes = {
  formik: PropTypes.object, 
}

export default HasEnglish