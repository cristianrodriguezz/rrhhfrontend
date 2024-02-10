import PropTypes from 'prop-types';

const LastName = ({ formik }) => {
  return (
    <>
      <div className='w-full'>
        <label htmlFor="last_name">Apellido</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          className='bg-white w-full placeholder:text-slate-900 placeholder:font-medium text-sm border-body rounded-lg'

          />
          {
            formik.touched.last_name && formik.errors.last_name 
            ? 
            <div className='text-error'>*{formik.errors.last_name}</div>
            : 
            null
          }
      </div>
    </>
  )
}

LastName.propTypes = {
  formik: PropTypes.object, 
}

export default LastName