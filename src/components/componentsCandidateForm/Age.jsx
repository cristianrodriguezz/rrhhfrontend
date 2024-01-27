import PropTypes from 'prop-types';

const Age = ({ formik }) => {
  return (
    <>
      <div >
        <label htmlFor="age">Edad:</label>
        <input
          type="text"
          id="age"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          />
      </div>
      {
        formik.touched.age && formik.errors.age 
        ? 
        <div className='text-red-500'>{formik.errors.age}</div>
        : 
        null
      }
    </>
  )
}

Age.propTypes = {
  formik: PropTypes.object, 
}

export default Age