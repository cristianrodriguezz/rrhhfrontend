import PropTypes from 'prop-types';

const Name = ({ formik }) => {
  return (
    <>
      <div>
        <label htmlFor="first_name">Nombre:</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.first_name}
          />
      </div>
      {
        formik.touched.first_name && formik.errors.first_name 
        ? 
        <div className='text-red-500'>{formik.errors.first_name}</div>
        : 
        null
      }
    </>
  )
}

Name.propTypes = {
  formik: PropTypes.object, 
}

export default Name