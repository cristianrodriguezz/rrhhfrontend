import PropTypes from 'prop-types';

import { provinces } from '../../mocks/provinces.json'

const SelectProvince = ({ formik }) => {

  return (
    <>
  <label htmlFor="province_id" className={`text-slate-900 font-medium flex gap-1 items-center justify-center  ${(formik.touched.province_id && formik.errors.province_id )  && 'border-2 border-error rounded-xl'}`}>
      Provincia
      <select
        id="province_id"
        name="province_id"
        onChange={(e) => {
          formik.setFieldValue('province_id', parseInt(e.target.value, 10));
        }}
        onBlur={formik.handleBlur}
        value={formik.values.province_id}
        className={`bg-white w-full border-none rounded-lg focus:shadow-none focus:ring-transparent `}
      >
        <option hidden defaultValue={undefined}>
          Seleccionar
        </option>
        {provinces?.map(({ id, name }) => (
          <option key={id} className='text-black' value={parseInt(id)}>
            {name}
          </option>
        ))}
      </select>
    </label>
      {
        formik.touched.province_id && formik.errors.province_id 
        ? 
        <div className='text-error'>*{formik.errors.province_id}</div>
        : 
        null
      }
    </>
  )
}

SelectProvince.propTypes = {
  formik: PropTypes.object
}

export default SelectProvince;
