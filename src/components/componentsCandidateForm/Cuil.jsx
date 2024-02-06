import PropTypes from 'prop-types';

const Cuil = ({ formik }) => {
  return (
    <>
      <div >
        <label htmlFor="cuil"></label>
        <input
          type="number"
          id="cuil"
          name="cuil"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cuil}
          placeholder='CUIL solo números'
          className='bg-pink-400 w-full placeholder:text-slate-900 placeholder:font-medium text-sm border-body rounded-lg'
          />
        {
          formik.touched.cuil && formik.errors.cuil 
          ? 
          <div className='text-error'>*{formik.errors.cuil}</div>
          : 
          null
        }
      </div>
    </>
  )
}

Cuil.propTypes = {
  formik: PropTypes.object,
}

export default Cuil
