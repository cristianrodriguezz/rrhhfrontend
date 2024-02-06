import PropTypes from 'prop-types';

const Age = ({ formik }) => {
  return (
    <>
      <div >
        <label htmlFor="age"></label>
        <input
          type="number"
          id="age"
          name="age"
          min={18}
          max={80}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className='bg-pink-400 w-13 placeholder:text-slate-900 placeholder:font-medium  text-sm border-body rounded-lg'
          placeholder='Edad'
          />
          {
            formik.touched.age && formik.errors.age 
            ? 
            <div className='text-error'>*{formik.errors.age}</div>
            : 
            null
          }
      </div>
    </>
  )
}

Age.propTypes = {
  formik: PropTypes.object,
  className: PropTypes.string
}

export default Age