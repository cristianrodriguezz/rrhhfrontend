import PropTypes from 'prop-types';

const PhoneNumber = ({ formik }) => {
  return (
    <>
      <div>
        <label htmlFor="phone_number">Número de teléfono</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone_number}
          />
      </div>
      {
        formik.touched.phone_number && formik.errors.phone_number 
        ? 
        <div className='text-red-500'>{formik.errors.phone_number}</div>
        : 
        null
      }
    </>
  )
}

PhoneNumber.propTypes = {
  formik: PropTypes.object, 
}

export default PhoneNumber