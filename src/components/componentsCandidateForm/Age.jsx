import PropTypes from 'prop-types';

const Age = ({ formik }) => {
  return (
    <>
      <div className='flex flex-col w-full'>
        <label htmlFor="age">Fecha de nacimiento</label>
        <input
          type="date"
          id="age"
          name="age"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
          className='bg-white  text-sm border-body rounded-lg'
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