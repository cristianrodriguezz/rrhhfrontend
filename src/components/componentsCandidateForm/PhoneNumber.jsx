import PropTypes from 'prop-types';

const PhoneNumber = ({ formik }) => {
  return (
    <>
      <div>
        <label htmlFor="phone_number"></label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
          placeholder='Número de teléfono'
          className='bg-pink-400 w-full placeholder:text-slate-900 placeholder:font-medium text-sm border-body rounded-lg'
          />
        {
          formik.touched.phone_number && formik.errors.phone_number 
          ? 
          <div className='text-error text-xs'>{formik.errors.phone_number}</div>
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