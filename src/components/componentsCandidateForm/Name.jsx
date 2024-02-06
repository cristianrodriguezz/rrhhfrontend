import PropTypes from 'prop-types';

const Name = ({ formik }) => {
  return (
    <>
      <div className='w-full'>
        <label htmlFor="first_name">Nombre</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          onChange={formik.handleChange}
          className='bg-pink-400 w-full placeholder:text-slate-900 placeholder:font-medium  text-sm border-body rounded-lg'
          onBlur={formik.handleBlur}
          value={formik.values.first_name}

          />
          {
            formik.touched.first_name && formik.errors.first_name 
            ? 
            <div className='text-error'>*{formik.errors.first_name}</div>
            : 
            null
          }
      </div>
    </>
  )
}

Name.propTypes = {
  formik: PropTypes.object, 
}

export default Name