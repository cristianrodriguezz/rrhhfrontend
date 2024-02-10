import PropTypes from 'prop-types';

const PhoneNumber = ({ formik }) => {
  return (
    <>
      <div>
        <label htmlFor="phone_number">Número de teléfono <span className='text-xs'>(con el código de área sin el 15)</span></label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
          className='bg-white w-full placeholder:text-slate-900 placeholder:font-medium text-sm border-body rounded-lg'
          />
        {
          formik.touched.phone_number && formik.errors.phone_number 
          ? 
          <div className='text-error '>{formik.errors.phone_number}</div>
          : 
          null
        }
      </div>
    </>
  )
}

PhoneNumber.propTypes = {
  formik: PropTypes.object, 
}

export default PhoneNumber