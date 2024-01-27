import PropTypes from 'prop-types';

const LastName = ({ formik }) => {
  return (
    <>
      <div>
        <label htmlFor="last_name">Apellido:</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          />
      </div>
      {
        formik.touched.last_name && formik.errors.last_name 
        ? 
        <div className='text-red-500'>{formik.errors.last_name}</div>
        : 
        null
      }
    </>
  )
}

LastName.propTypes = {
  formik: PropTypes.object, 
}

export default LastName