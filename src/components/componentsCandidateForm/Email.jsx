import PropTypes from 'prop-types';

const Email = ({ formik }) => {
  return (
    <>
      <div className='w-full'>
        <label htmlFor="email" className='font-medium'>Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          className='bg-white w-full placeholder:text-slate-400  text-sm border-body rounded-lg'
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder='ejemplo@mail.com'
          />
          {
            formik.touched.email && formik.errors.email 
            ? 
            <div className='text-error'>*{formik.errors.email}</div>
            : 
            null
          }
      </div>
    </>
  )
}

Email.propTypes = {
  formik: PropTypes.object, 
}

export default Email