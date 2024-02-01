import PropTypes from 'prop-types';

const Age = ({ formik, className }) => {
  return (
    <>
      <div >
        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          id="age"
          name="age"
          min={18}
          max={80}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className={className}
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
  className: PropTypes.string
}

export default Age