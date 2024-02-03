import PropTypes from 'prop-types';

const Cuil = ({ formik, className }) => {
  return (
    <>
      <div >
        <label htmlFor="cuil">Cuil:</label>
        <input
          type="number"
          id="cuil"
          name="cuil"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.cuil}
          className={className}
          />
      </div>
      {
        formik.touched.cuil && formik.errors.cuil 
        ? 
        <div className='text-red-500'>{formik.errors.cuil}</div>
        : 
        null
      }
    </>
  )
}

Cuil.propTypes = {
  formik: PropTypes.object,
  className: PropTypes.string
}

export default Cuil
